<script>
import Title from '../../_components/page-title.svelte';
import {Dropdown, Button} from 'industrial-ui';
import ShowBlock from '../../_components/show-block.svelte';
import SimpleExample from './simple-example/tailwind.svelte';
import OpenOnHover from './open-on-hover/tailwind.svelte';
import CustomTransition from './custom-transition/tailwind.svelte';
import Positioning from './positioning/tailwind.svelte';
import SimpleSelection from './simple-selection/tailwind.svelte';
import MultipleSelection from './multiple-selection/tailwind.svelte';
import Search from './search/tailwind.svelte';
import PropsSlotsMarkup from './props-slots-markup.md';
</script>

<Title
  id="examples"
  title="Dropdown"
/>

<h2 id="simple-example">Simple example</h2>

Dropdown usage without special properties. Just classes are configured with
some style library that makes it look nice

<ShowBlock>
  <SimpleExample />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown let:close id="dd-1">
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
  
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click={() => close()}>Hello, there!</span>
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click={() => close()}>Do some action</span>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      class: 'inline-block relative',
      dropdownClass: 'absolute rounded bg-white my-2 shadow-xl z-10',
    },
  },
  ```
  </pre>
</ShowBlock>


<h2 id="open-on-hover">Open on hover effect</h2>

Pass the `openOnHover` property to open the dropdown when the mouse is on the trigger

<ShowBlock>
  <OpenOnHover />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown openOnHover id="dd-2">
    <div slot="trigger">
      <Button>Hover me</Button>
    </div>
  
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Hello, there!</span>
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Do some action</span>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      class: 'inline-block relative',
      dropdownClass: 'absolute rounded bg-white my-2 shadow-xl z-10',
    },
  },
  ```
  </pre>
</ShowBlock>


<h2 id="positioning">Dropdown position</h2>

If you want your dropdown to open in different parts of the window, you can use the
`position` property. It can be one of `'auto'|'bottom left'|'bottom right'|'top left'|'top right'`.
If `auto` is chosen, the dropdown will calculate and choose the most appropriate property
to fit into the window.

<ShowBlock>
  <Positioning />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown position="bottom left" openOnHover id="dd-pp-1">
    <div slot="trigger">
      <Button>Bottom left</Button>
    </div>
  
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Hello, there!</span>
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Do some action</span>
  </Dropdown>
  
  <Dropdown position="bottom right" openOnHover id="dd-pp-2">
    <div slot="trigger">
      <Button>Bottom right</Button>
    </div>
  
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Hello, there!</span>
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Do some action</span>
  </Dropdown>
  
  <Dropdown position="auto" openOnHover id="dd-pp-3">
    <div slot="trigger">
      <Button>Auto</Button>
    </div>
  
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Hello, there!</span>
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Do some action</span>
  </Dropdown>
  
  <Dropdown position="top left" openOnHover id="dd-pp-4">
    <div slot="trigger">
      <Button>Top left</Button>
    </div>
  
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Hello, there!</span>
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Do some action</span>
  </Dropdown>
  
  <Dropdown position="top right" openOnHover id="dd-pp-4">
    <div slot="trigger">
      <Button>Top right</Button>
    </div>
  
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Hello, there!</span>
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer">Do some action</span>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      class: 'inline-block relative',
      dropdownClass: 'absolute rounded bg-white my-2 shadow-xl z-10',
    },
  },
  ```
  </pre>
</ShowBlock>


<h2 id="custom-transition">Custom transition</h2>

You can configure a custom transition and pass its name to the `transition` prop or to the configuration
object of the dropdown. Transition should be a function that operates on some node element and has options
like `delay`, `duration` and other properties perfectly described in the 
<a href="https://svelte.dev/tutorial/custom-css-transitions" target="_blank">Svelte's documentation</a> 

<ShowBlock>
  <CustomTransition />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
  </script>
  
  <Dropdown transition="fadeWithColor" let:close id="dd-3">
    <div slot="trigger">
      <Button>Toggle me</Button>
    </div>
  
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click={() => close()}>Hello, there!</span>
    <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click={() => close()}>Do some action</span>
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  customTransitions: {
    fadeWithColor,
  },
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      isProperties: {
        multiselect: 'rounded border-solid border border-gray-300 py-2 px-4',
        search: 'rounded border-solid border border-gray-300',
      },
      class: 'inline-block relative',
      dropdownClass: 'absolute rounded bg-white my-2 shadow-xl z-10',
    },
  },
  ```
  </pre>
</ShowBlock>

<h2 id="selection-dropdown">Selection dropdown</h2>

*Simple selection*: an example of how to pick a value from the list

<ShowBlock>
  <SimpleSelection />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
    const ITEMS = ['Male', 'Female'];
    let activeItem = null;
    const choose = item => activeItem = item;
  </script>
  
  <Dropdown is:select let:close={close} id="dd-4">
    <div slot="trigger">
      <Button>
        {#if activeItem}
          {activeItem}
        {:else}
          Gender
        {/if}
      </Button>
    </div>
  
    {#each ITEMS as item}
      <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click="{() => {choose(item); close()}}">{item}</span>
    {/each}
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      class: 'inline-block relative',
      dropdownClass: 'absolute rounded bg-white my-2 shadow-xl z-10',
    },
  },
  ```
  </pre>
</ShowBlock>

*Multiple selection*: Pick as many options as you want.

<ShowBlock>
  <MultipleSelection />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown, Button} from 'industrial-ui';
    const ITEMS = ['Russia', 'India', 'Not Russia and not India'];
    let activeItems = [];
    const choose = item => {
      if (activeItems.includes(item)) activeItems = activeItems.filter(itm => itm !== item);
      else activeItems = [...activeItems, item];
    };
  </script>
  
  <Dropdown is:multiselect let:close={close} id="dd-5">
    <div slot="trigger">
      {#if activeItems.length}
        {#each activeItems as item}
          <span class="inline-block bg-gray-200 py-2 px-2 mr-2 rounded cursor-pointer" on:click={() => choose(item)}>{item}</span>
        {/each}
      {:else}
        Countries
      {/if}
    </div>
  
    {#each ITEMS.filter(itm => !activeItems.includes(itm)) as item}
      <span class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer" on:click="{() => {choose(item)}}">{item}</span>
    {/each}
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      isProperties: {
        multiselect: 'rounded border-solid border border-gray-300 py-2 px-4',
      },
      class: 'inline-block relative',
      dropdownClass: 'absolute rounded bg-white my-2 shadow-xl z-10',
    },
  },
  ```
  </pre>
</ShowBlock>

*Search dropdown*: Find a value in the dropdown list by typing some letters.

<ShowBlock>
  <Search />
  
  <pre class="code" slot="code">
  ```html
  <script>
    import {Dropdown} from 'industrial-ui';
    const LATIN_COUNTRIES = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'French Guiana', 'Guadeloupe', 'Guatemala', 'Haiti', 'Honduras', 'Martinique', 'Mexico', 'Nicaragua', 'Panama', 'Paraguay', 'Peru', 'Puerto Rico', 'Saint Barthelemy', 'Saint Martin', 'Uruguay', 'Venezuela'];
    let value = null;
    let searchValue = '';
  
    const choose = item => {
      value = item;
      searchValue = '';
    };
    const input = e => searchValue = e.target.value;
  </script>
  
  <Dropdown
    is:search
    let:close={close}
    let:open={open}
    dropdownClass="h-32 w-full overflow-y-auto"
    id="dd-6"
  >
    <input
      slot="trigger"
      class="py-2 px-2 border-none"
      placeholder="Choose latin country"
      value={value}
      on:input={(e) => input(e)}
    />
  
    {#each LATIN_COUNTRIES.filter(itm => itm.startsWith(searchValue)) as item}
      <span
        class:bg-gray-300={item === value}
        class="hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap cursor-pointer"
        on:click="{() => {choose(item); close()}}"
      >
        {item}
      </span>
    {/each}
  </Dropdown>
  ```
  </pre>

  <pre class="code" slot="config">
  ```javascript
  components: {
    button: {
      class: 'bg-gray-200 font-semibold py-2 px-6 rounded inline-flex items-center',
    },
    dropdown: {
      transition: 'slide',
      transitionOptions: {delay: 0, duration: 300},
      isProperties: {
        search: 'rounded border-solid border border-gray-300',
      },
      class: 'inline-block relative',
      dropdownClass: 'absolute rounded bg-white my-2 shadow-xl z-10',
    },
  },
  ```
  </pre>
</ShowBlock>


<PropsSlotsMarkup />