// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Field matches the snapshot as a fieldset with a Checkbox control Case 0 Basic field: ({"isFieldset": true}) => HTML 1`] = `
<fieldset
  class="cdx-field cdx-field--is-fieldset"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  
  <!-- &lt;legend&gt; must be the root element so it is a direct child of &lt;fieldset&gt;, and &lt;legend&gt;
		contains the description. Both required for assistive technology support. -->
  <legend
    class="cdx-label"
    id="cdx-label-60"
  >
    <span
      class="cdx-label__label"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </span>
    <!-- For legends, the description needs to be inside the &lt;legend&gt; for
			assistive technology support. -->
    <!--v-if-->
  </legend>
  
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <span
      class="cdx-checkbox cdx-checkbox--status-default"
    >
      <input
        class="cdx-checkbox__input"
        id="cdx-checkbox-63"
        type="checkbox"
        value="false"
      />
      <span
        class="cdx-checkbox__icon"
      />
      <!-- Only render a Label component if label text has been provided. This component can also
			supply a description to the Checkbox if content is provided in the description slot. -->
      
      <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
      <div
        class="cdx-label cdx-checkbox__label"
      >
        <label
          class="cdx-label__label"
          for="cdx-checkbox-63"
        >
          <!--v-if-->
          <span
            class="cdx-label__label__text"
          >
            <!-- @slot Label text. -->
            
            
            Checkbox label
            
            
          </span>
          <!--v-if-->
        </label>
        <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
        <!--v-if-->
      </div>
      
    </span>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</fieldset>
`;

exports[`Field matches the snapshot as a fieldset with a Checkbox control Case 1 Disabled: ({"disabled": true, "isFieldset": true}) => HTML 1`] = `
<fieldset
  class="cdx-field cdx-field--disabled cdx-field--is-fieldset"
  disabled=""
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  
  <!-- &lt;legend&gt; must be the root element so it is a direct child of &lt;fieldset&gt;, and &lt;legend&gt;
		contains the description. Both required for assistive technology support. -->
  <legend
    class="cdx-label cdx-label--disabled"
    id="cdx-label-65"
  >
    <span
      class="cdx-label__label"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </span>
    <!-- For legends, the description needs to be inside the &lt;legend&gt; for
			assistive technology support. -->
    <!--v-if-->
  </legend>
  
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <span
      class="cdx-checkbox cdx-checkbox--status-default"
    >
      <input
        class="cdx-checkbox__input"
        disabled=""
        id="cdx-checkbox-68"
        type="checkbox"
        value="false"
      />
      <span
        class="cdx-checkbox__icon"
      />
      <!-- Only render a Label component if label text has been provided. This component can also
			supply a description to the Checkbox if content is provided in the description slot. -->
      
      <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
      <div
        class="cdx-label cdx-label--disabled cdx-checkbox__label"
      >
        <label
          class="cdx-label__label"
          for="cdx-checkbox-68"
        >
          <!--v-if-->
          <span
            class="cdx-label__label__text"
          >
            <!-- @slot Label text. -->
            
            
            Checkbox label
            
            
          </span>
          <!--v-if-->
        </label>
        <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
        <!--v-if-->
      </div>
      
    </span>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</fieldset>
`;

exports[`Field matches the snapshot with a Select control Case 0 Basic field: ({}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-26"
      id="cdx-label-24"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      aria-disabled="false"
      class="cdx-select-vue cdx-select-vue--enabled cdx-select-vue--no-selections cdx-select-vue--status-default"
    >
      <div
        aria-controls="cdx-select-menu-27"
        aria-expanded="false"
        class="cdx-select-vue__handle"
        id="cdx-input-26"
        role="combobox"
        tabindex="0"
      >
        <!--
				@slot Display of the current selection or default label
				@binding {MenuItemData|undefined} selected-menu-item The currently selected menu
				item
				@binding {string} default-label The default label, provided via a prop
			-->
        
        
        
        <!--v-if-->
        <span
          class="cdx-icon cdx-icon--medium cdx-select-vue__indicator"
        >
          <svg
            aria-hidden="true"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!--v-if-->
            <!-- eslint-disable vue/no-v-html -->
            <g>
              <path
                d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"
              />
            </g>
          </svg>
        </span>
      </div>
      <div
        class="cdx-menu"
        style="display: none;"
      >
        <ul
          class="cdx-menu__listbox"
          id="cdx-select-menu-27"
          role="listbox"
        >
          <!--v-if-->
          <!--v-if-->
          
          <li
            aria-disabled="false"
            aria-selected="false"
            class="cdx-menu-item cdx-menu-item--enabled"
            id="cdx-menu-item-29"
            role="option"
          >
            <!-- @slot Custom menu item content. -->
            
            <span
              class="cdx-menu-item__content"
            >
              <!-- Thumbnail, thumbnail placeholder, or icon. -->
              <!--v-if-->
              <!-- Item text. -->
              <span
                class="cdx-menu-item__text"
              >
                <!-- Item label. -->
                <span
                  class="cdx-menu-item__text__label"
                >
                  <bdi>
                    1
                  </bdi>
                </span>
                <!-- Item search query match (e.g. alias). -->
                <!--v-if-->
                <!-- Item label supporting text. -->
                <!--v-if-->
                <!-- Item description. -->
                <!--v-if-->
              </span>
            </span>
            
          </li>
          
          <!--v-if-->
        </ul>
      </div>
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a Select control Case 1 Disabled: ({"disabled": true}) => HTML 1`] = `
<div
  aria-disabled="true"
  class="cdx-field cdx-field--disabled"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label cdx-label--disabled"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-32"
      id="cdx-label-30"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      aria-disabled="true"
      class="cdx-select-vue cdx-select-vue--disabled cdx-select-vue--no-selections cdx-select-vue--status-default"
    >
      <div
        aria-controls="cdx-select-menu-33"
        aria-expanded="false"
        class="cdx-select-vue__handle"
        id="cdx-input-32"
        role="combobox"
        tabindex="0"
      >
        <!--
				@slot Display of the current selection or default label
				@binding {MenuItemData|undefined} selected-menu-item The currently selected menu
				item
				@binding {string} default-label The default label, provided via a prop
			-->
        
        
        
        <!--v-if-->
        <span
          class="cdx-icon cdx-icon--medium cdx-select-vue__indicator"
        >
          <svg
            aria-hidden="true"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!--v-if-->
            <!-- eslint-disable vue/no-v-html -->
            <g>
              <path
                d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"
              />
            </g>
          </svg>
        </span>
      </div>
      <div
        class="cdx-menu"
        style="display: none;"
      >
        <ul
          class="cdx-menu__listbox"
          id="cdx-select-menu-33"
          role="listbox"
        >
          <!--v-if-->
          <!--v-if-->
          
          <li
            aria-disabled="false"
            aria-selected="false"
            class="cdx-menu-item cdx-menu-item--enabled"
            id="cdx-menu-item-35"
            role="option"
          >
            <!-- @slot Custom menu item content. -->
            
            <span
              class="cdx-menu-item__content"
            >
              <!-- Thumbnail, thumbnail placeholder, or icon. -->
              <!--v-if-->
              <!-- Item text. -->
              <span
                class="cdx-menu-item__text"
              >
                <!-- Item label. -->
                <span
                  class="cdx-menu-item__text__label"
                >
                  <bdi>
                    1
                  </bdi>
                </span>
                <!-- Item search query match (e.g. alias). -->
                <!--v-if-->
                <!-- Item label supporting text. -->
                <!--v-if-->
                <!-- Item description. -->
                <!--v-if-->
              </span>
            </span>
            
          </li>
          
          <!--v-if-->
        </ul>
      </div>
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a Select control Case 2 Error status with message: ({"messages": [Object], "status": "error"}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-38"
      id="cdx-label-36"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      aria-disabled="false"
      class="cdx-select-vue cdx-select-vue--enabled cdx-select-vue--no-selections cdx-select-vue--status-error"
    >
      <div
        aria-controls="cdx-select-menu-39"
        aria-expanded="false"
        class="cdx-select-vue__handle"
        id="cdx-input-38"
        role="combobox"
        tabindex="0"
      >
        <!--
				@slot Display of the current selection or default label
				@binding {MenuItemData|undefined} selected-menu-item The currently selected menu
				item
				@binding {string} default-label The default label, provided via a prop
			-->
        
        
        
        <!--v-if-->
        <span
          class="cdx-icon cdx-icon--medium cdx-select-vue__indicator"
        >
          <svg
            aria-hidden="true"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!--v-if-->
            <!-- eslint-disable vue/no-v-html -->
            <g>
              <path
                d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"
              />
            </g>
          </svg>
        </span>
      </div>
      <div
        class="cdx-menu"
        style="display: none;"
      >
        <ul
          class="cdx-menu__listbox"
          id="cdx-select-menu-39"
          role="listbox"
        >
          <!--v-if-->
          <!--v-if-->
          
          <li
            aria-disabled="false"
            aria-selected="false"
            class="cdx-menu-item cdx-menu-item--enabled"
            id="cdx-menu-item-41"
            role="option"
          >
            <!-- @slot Custom menu item content. -->
            
            <span
              class="cdx-menu-item__content"
            >
              <!-- Thumbnail, thumbnail placeholder, or icon. -->
              <!--v-if-->
              <!-- Item text. -->
              <span
                class="cdx-menu-item__text"
              >
                <!-- Item label. -->
                <span
                  class="cdx-menu-item__text__label"
                >
                  <bdi>
                    1
                  </bdi>
                </span>
                <!-- Item search query match (e.g. alias). -->
                <!--v-if-->
                <!-- Item label supporting text. -->
                <!--v-if-->
                <!-- Item description. -->
                <!--v-if-->
              </span>
            </span>
            
          </li>
          
          <!--v-if-->
        </ul>
      </div>
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <div
    class="cdx-field__validation-message"
  >
    <transition-stub
      appear="false"
      css="true"
      leaveactiveclass=""
      name="cdx-message"
      persisted="false"
    >
      <div
        class="cdx-message cdx-message--inline cdx-message--error"
        role="alert"
      >
        <span
          class="cdx-icon cdx-icon--medium cdx-message__icon--vue"
        >
          <svg
            aria-hidden="true"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!--v-if-->
            <!-- eslint-disable vue/no-v-html -->
            <g>
              <path
                d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
              />
            </g>
          </svg>
        </span>
        <div
          class="cdx-message__content"
        >
          <!-- @slot Message content. -->
          
          Error
          
        </div>
        <!--v-if-->
      </div>
    </transition-stub>
  </div>
</div>
`;

exports[`Field matches the snapshot with a Select control Case 3 With description: ({}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-44"
      id="cdx-label-42"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <span
      class="cdx-label__description"
      id="cdx-description-43"
    >
      <!-- @slot Short description text. -->
      
      <!-- @slot Short description text. -->
      
      Field description
      
      
    </span>
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      aria-disabled="false"
      class="cdx-select-vue cdx-select-vue--enabled cdx-select-vue--no-selections cdx-select-vue--status-default"
    >
      <div
        aria-controls="cdx-select-menu-45"
        aria-describedby="cdx-description-43"
        aria-expanded="false"
        class="cdx-select-vue__handle"
        id="cdx-input-44"
        role="combobox"
        tabindex="0"
      >
        <!--
				@slot Display of the current selection or default label
				@binding {MenuItemData|undefined} selected-menu-item The currently selected menu
				item
				@binding {string} default-label The default label, provided via a prop
			-->
        
        
        
        <!--v-if-->
        <span
          class="cdx-icon cdx-icon--medium cdx-select-vue__indicator"
        >
          <svg
            aria-hidden="true"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!--v-if-->
            <!-- eslint-disable vue/no-v-html -->
            <g>
              <path
                d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"
              />
            </g>
          </svg>
        </span>
      </div>
      <div
        class="cdx-menu"
        style="display: none;"
      >
        <ul
          class="cdx-menu__listbox"
          id="cdx-select-menu-45"
          role="listbox"
        >
          <!--v-if-->
          <!--v-if-->
          
          <li
            aria-disabled="false"
            aria-selected="false"
            class="cdx-menu-item cdx-menu-item--enabled"
            id="cdx-menu-item-47"
            role="option"
          >
            <!-- @slot Custom menu item content. -->
            
            <span
              class="cdx-menu-item__content"
            >
              <!-- Thumbnail, thumbnail placeholder, or icon. -->
              <!--v-if-->
              <!-- Item text. -->
              <span
                class="cdx-menu-item__text"
              >
                <!-- Item label. -->
                <span
                  class="cdx-menu-item__text__label"
                >
                  <bdi>
                    1
                  </bdi>
                </span>
                <!-- Item search query match (e.g. alias). -->
                <!--v-if-->
                <!-- Item label supporting text. -->
                <!--v-if-->
                <!-- Item description. -->
                <!--v-if-->
              </span>
            </span>
            
          </li>
          
          <!--v-if-->
        </ul>
      </div>
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a TextInput control Case 0 Basic field: ({}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-2"
      id="cdx-label-0"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-input cdx-text-input--status-default"
    >
      <!-- size="1" is to prevent the browser from setting an implicit min-width -->
      <input
        class="cdx-text-input__input"
        id="cdx-input-2"
        size="1"
        type="text"
      />
      <!--v-if-->
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a TextInput control Case 1 With label icon: ({"labelIcon": "<path d=\\"M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25\\"/>"}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-5"
      id="cdx-label-3"
    >
      <span
        class="cdx-icon cdx-icon--medium cdx-label__label__icon"
      >
        <svg
          aria-hidden="true"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!--v-if-->
          <!-- eslint-disable vue/no-v-html -->
          <g>
            <path
              d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"
            />
          </g>
        </svg>
      </span>
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-input cdx-text-input--status-default"
    >
      <!-- size="1" is to prevent the browser from setting an implicit min-width -->
      <input
        class="cdx-text-input__input"
        id="cdx-input-5"
        size="1"
        type="text"
      />
      <!--v-if-->
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a TextInput control Case 2 With optional flag: ({"optionalFlag": "(optional)"}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-8"
      id="cdx-label-6"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <span
        class="cdx-label__label__optional-flag"
      >
        <!-- Add a space before the optional flag text. Vue strips whitespace
					between everything except plain text, so we can't rely on a newline to
					add a natural space here. -->
        <!-- eslint-disable-next-line vue/no-useless-mustaches -->
           (optional)
      </span>
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-input cdx-text-input--status-default"
    >
      <!-- size="1" is to prevent the browser from setting an implicit min-width -->
      <input
        class="cdx-text-input__input"
        id="cdx-input-8"
        size="1"
        type="text"
      />
      <!--v-if-->
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a TextInput control Case 3 With visually hidden label: ({"hideLabel": true}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label cdx-label--visually-hidden"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-11"
      id="cdx-label-9"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-input cdx-text-input--status-default"
    >
      <!-- size="1" is to prevent the browser from setting an implicit min-width -->
      <input
        class="cdx-text-input__input"
        id="cdx-input-11"
        size="1"
        type="text"
      />
      <!--v-if-->
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a TextInput control Case 4 Disabled: ({"disabled": true}) => HTML 1`] = `
<div
  aria-disabled="true"
  class="cdx-field cdx-field--disabled"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label cdx-label--disabled"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-14"
      id="cdx-label-12"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-input cdx-text-input--status-default"
    >
      <!-- size="1" is to prevent the browser from setting an implicit min-width -->
      <input
        class="cdx-text-input__input"
        disabled=""
        id="cdx-input-14"
        size="1"
        type="text"
      />
      <!--v-if-->
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a TextInput control Case 5 Error status with message: ({"messages": [Object], "status": "error"}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-17"
      id="cdx-label-15"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-input cdx-text-input--status-error"
    >
      <!-- size="1" is to prevent the browser from setting an implicit min-width -->
      <input
        class="cdx-text-input__input"
        id="cdx-input-17"
        size="1"
        type="text"
      />
      <!--v-if-->
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <div
    class="cdx-field__validation-message"
  >
    <transition-stub
      appear="false"
      css="true"
      leaveactiveclass=""
      name="cdx-message"
      persisted="false"
    >
      <div
        class="cdx-message cdx-message--inline cdx-message--error"
        role="alert"
      >
        <span
          class="cdx-icon cdx-icon--medium cdx-message__icon--vue"
        >
          <svg
            aria-hidden="true"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!--v-if-->
            <!-- eslint-disable vue/no-v-html -->
            <g>
              <path
                d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
              />
            </g>
          </svg>
        </span>
        <div
          class="cdx-message__content"
        >
          <!-- @slot Message content. -->
          
          Error
          
        </div>
        <!--v-if-->
      </div>
    </transition-stub>
  </div>
</div>
`;

exports[`Field matches the snapshot with a TextInput control Case 6 With description: ({}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-20"
      id="cdx-label-18"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <span
      class="cdx-label__description"
      id="cdx-description-19"
    >
      <!-- @slot Short description text. -->
      
      <!-- @slot Short description text. -->
      
      Field description
      
      
    </span>
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-input cdx-text-input--status-default"
    >
      <!-- size="1" is to prevent the browser from setting an implicit min-width -->
      <input
        aria-describedby="cdx-description-19"
        class="cdx-text-input__input"
        id="cdx-input-20"
        size="1"
        type="text"
      />
      <!--v-if-->
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a TextInput control Case 7 With help text: ({}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-23"
      id="cdx-label-21"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-input cdx-text-input--status-default"
    >
      <!-- size="1" is to prevent the browser from setting an implicit min-width -->
      <input
        class="cdx-text-input__input"
        id="cdx-input-23"
        size="1"
        type="text"
      />
      <!--v-if-->
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a Textarea control Case 0 Basic field: ({}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-50"
      id="cdx-label-48"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-area cdx-text-area--status-default"
    >
      <textarea
        class="cdx-text-area__textarea"
        id="cdx-input-50"
      />
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a Textarea control Case 1 Disabled: ({"disabled": true}) => HTML 1`] = `
<div
  aria-disabled="true"
  class="cdx-field cdx-field--disabled"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label cdx-label--disabled"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-53"
      id="cdx-label-51"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-area cdx-text-area--status-default"
    >
      <textarea
        class="cdx-text-area__textarea"
        disabled=""
        id="cdx-input-53"
      />
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;

exports[`Field matches the snapshot with a Textarea control Case 2 Error status with message: ({"messages": [Object], "status": "error"}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-56"
      id="cdx-label-54"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <!--v-if-->
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-area cdx-text-area--status-error"
    >
      <textarea
        class="cdx-text-area__textarea"
        id="cdx-input-56"
      />
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <div
    class="cdx-field__validation-message"
  >
    <transition-stub
      appear="false"
      css="true"
      leaveactiveclass=""
      name="cdx-message"
      persisted="false"
    >
      <div
        class="cdx-message cdx-message--inline cdx-message--error"
        role="alert"
      >
        <span
          class="cdx-icon cdx-icon--medium cdx-message__icon--vue"
        >
          <svg
            aria-hidden="true"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!--v-if-->
            <!-- eslint-disable vue/no-v-html -->
            <g>
              <path
                d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
              />
            </g>
          </svg>
        </span>
        <div
          class="cdx-message__content"
        >
          <!-- @slot Message content. -->
          
          Error
          
        </div>
        <!--v-if-->
      </div>
    </transition-stub>
  </div>
</div>
`;

exports[`Field matches the snapshot with a Textarea control Case 3 With description: ({}) => HTML 1`] = `
<div
  class="cdx-field"
>
  
  <!-- Separate &lt;label&gt; and description are wrapped in a &lt;div&gt;. -->
  <div
    class="cdx-label"
  >
    <label
      class="cdx-label__label"
      for="cdx-input-59"
      id="cdx-label-57"
    >
      <!--v-if-->
      <span
        class="cdx-label__label__text"
      >
        <!-- @slot Label text. -->
        
        <!-- @slot Label text. -->
        
        Label text
        
        
      </span>
      <!--v-if-->
    </label>
    <!-- Include an ID attribute that will be used on the input for aria-describedby. -->
    <span
      class="cdx-label__description"
      id="cdx-description-58"
    >
      <!-- @slot Short description text. -->
      
      <!-- @slot Short description text. -->
      
      Field description
      
      
    </span>
  </div>
  
  <div
    class="cdx-field__control"
  >
    <!-- @slot Input, control, or input group. -->
    
    <div
      class="cdx-text-area cdx-text-area--status-default"
    >
      <textarea
        aria-describedby="cdx-description-58"
        class="cdx-text-area__textarea"
        id="cdx-input-59"
      />
      <!--v-if-->
      <!--v-if-->
    </div>
    
  </div>
  <div
    class="cdx-field__help-text"
  >
    <!-- @slot Further explanation of how to use this field. -->
    
    
  </div>
  <!--v-if-->
</div>
`;
