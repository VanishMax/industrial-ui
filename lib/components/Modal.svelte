<script>
  import {getContext, onMount} from 'svelte';
  import {current_component} from 'svelte/internal';
  import getEventAction, {dispatchMultiple} from '../utils/dispatch-events';
  import filterIsProps from '../utils/is-properties';
  import filterProps from '../utils/filter-props';
  import composeClasses from '../utils/compose-classes';
  import {animate} from '../utils/transition';

  export let mockConfig = null;
  export let id = null;
  export let value = false;
  export let transition = null;
  export let transitionOptions = null;
  export let overlayClass = null;
  export let bodyClass = null;

  const globalConfig = mockConfig || getContext('iui-config');
  if (!globalConfig) throw new Error('No config specified. Please, wrap your component into IUI.');

  const config = globalConfig.components.modal;
  const events = getEventAction(current_component, !!mockConfig);
  const propsList = ['id', 'class', 'overlayClass', 'bodyClass', 'value', 'mockConfig', 'transition', 'transitionOptions', ...Object.keys(config.isProperties)];

  let dialog = null;
  let bodyInitialOverflow = null;
  const getBodyClasses = val => composeClasses(config.bodyClass, val ? config.openBodyClass : config.closeBodyClass, bodyClass) || '';
  onMount(() => {
    bodyInitialOverflow = getComputedStyle(document.body).overflow;

    if (!config.moveToBody) return;
    document.body.appendChild(dialog);
  });

  $: value ? open() : close();

  const close = () => {
    value = false;
    dispatchMultiple(['close', 'toggle'], false);

    if (typeof window !== 'undefined') {
      if (config.blockBodyScroll) document.body.style.overflow = bodyInitialOverflow;
      const trueClasses = getBodyClasses(true), falseClasses = getBodyClasses(false);
      if (trueClasses) document.body.classList.remove(...getBodyClasses(true).split(' '));
      if (falseClasses) document.body.classList.add(...getBodyClasses(false).split(' '));

      // TODO: Animate transition out
      // animate(dialog, {transition: 'slide' || config.transition, options: config.transitionOptions, customs: globalConfig.customTransitions, isOut: true});
    }
  };

  const open = () => {
    value = true;
    dispatchMultiple(['open', 'toggle'], true);

    if (typeof window !== 'undefined') {
      if (config.blockBodyScroll) document.body.style.overflow = 'hidden';
      const trueClasses = getBodyClasses(true), falseClasses = getBodyClasses(false);
      if (falseClasses) document.body.classList.remove(...getBodyClasses(false).split(' '));
      if (trueClasses) document.body.classList.add(...getBodyClasses(true).split(' '));

      animate(dialog, {transition: transition || config.transition, options: transitionOptions || config.transitionOptions, customs: globalConfig.customTransitions});
    }
  };

  const handleWindowKey = (e) => {
    if (e.key === 'Escape' && value) close();
  };
</script>

<svelte:body on:keyup={handleWindowKey} />

<dialog
  {id}
  class={composeClasses(
    config.overlayClass,
    value ? config.openOverlayClass : config.closeOverlayClass,
    overlayClass,
  )}
  open={value}
  bind:this={dialog}
  on:click={close}
>
  <slot name="in-overlay" />

  <div
    class={composeClasses(
      globalConfig.globalClass,
      config.class,
      $$props.class,
      filterIsProps(config.isProperties, $$props),
      value ? config.openClass : config.closeClass
    )}
    {...filterProps(propsList, $$props)}
    use:events
    on:click|stopPropagation
  >
    <slot name="close" />

    <slot {close} {open} {value} />
  </div>
</dialog>
