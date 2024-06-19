// Responsive Design

// 1. Media Queries
// 2. Bootstrap...

// I need to make sure the elements on the page is changing depending on the screen size,

// @media in css

// GROUND  RULES for Responsive Design:

/*
    1. DO NOT USE ABSOLUTE UNITS ()
    2. use relative units (em, rem, % vh, vw)
    3. Containers (div) should be fluid. (eg: Flex box).
    4. Max. no of time do not try to fix Width and Height.
    5. Design mobile first -> Add Breakpoints to have support for Mobile.

   Breakpoints: is a point where in we want our CSS to shift from one state to another.
   
   use @media to add breakpoint to the page:

   320px - 480px -> Mobile phone
   480px - 640px -> Mini tablet (Ipad mini)
   640px - 768px -> Tablet (Ipad pro)
   960px - 1024px -> Laptops, Desktops
   1024px > -> High resolution laptops and desktops.


   RULES 
   1. ->  CSS  at rules  (@)

   is a statement that provides the CSS with instructions to perform the behavior.

   @import 
   @font-face
   @keyframes

   2. -> at Media  @media

   to define the breakpoint.

   @media [media-type]([media-feature]) {
    // Normal CSS
   }

   [media-type] -> Optional
*/
