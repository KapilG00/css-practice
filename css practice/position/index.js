// POSITION

/*
    5 Different types of positions ->

    1. Static : By Default
    2. Relative 
    3. Absolute
    4. Fixed
    5. Sticky

    With "position" properties ( except static ) we have attributes that goes with that: left, right, top, bottom, z-index
    Any element that we create its position by default is static.
*/

// NOTE: TO USE ABSOLUTE and RELATIVE we need PARENT container to have non-static position (position: relative).
// NOTE: If there is no parent with the non-static position then BODY will be the reference.

/*
    1. ABSOLUTE: Making an element absolute sets it's z-index to z > 0.

    -> What happens is that our element will be removed from the flow of the page.
    -> Other elements will not be affected with this.

    -> Allows me to place element exactly where i want (MOVE AROUND THIS ELEMENT)
    -> Positioning attributes to set the location (left, right, top, bottom, z-index)

    -> IMPORTANT NOTE: Whatever positioning attributes we are giving, this position 
                       will be relative to PARENT (Relative or Absolute) from it's position.
                       In this case, our PARENT must be either Relative or Absolute.
*/

/*
    2. RELATIVE:

    -> Relative to original position on the page.
    -> Positioning attributes work here (left, top , right, bottom, z-index).
    -> It is taking its own static position as a relative position from there it will try to position itself.
*/
