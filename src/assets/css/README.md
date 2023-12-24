# Using 7-1 Pattern a little bit modified

## 7-1 Pattern

The 7-1 Pattern is a widely used pattern for structuring Sass projects. It's a logical architecture that's easy to remember and it works well for small to medium-sized projects. (https://sass-guidelin.es/)

## Modifying 7-1 Pattern

I have modified the 7-1 Pattern to suit my needs. I have susbtituted the `abstracts/` folder with `variables/` and `utilities/` folders. I have also added a `vendors/` folder to contain 3rd-party styles, mixins, etc.

## Folder Structure

- `base/` - contains global styles, such as resets, typography, colors, etc.
- `components/` - contains each self-contained component in its own .scss partial
- `layout/` - contains styling for larger layout components; e.g. nav, header, footer, etc.
- `pages/` - contains page-specific styling, if necessary
- `themes/` - contains styling for different themes
- `variables/` - contains Sass variables
- `utilities/` - contains Sass mixins and functions
- `vendors/` - contains 3rd-party styles, mixins, etc.
- `main.scss` - output file that brings together all of the above parts
