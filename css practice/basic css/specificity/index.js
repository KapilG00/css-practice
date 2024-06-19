// ------------------- CSS SPECIFICITY ---------------------

/* RULE 1: Fight among the place of CSS. */

/* Position 1. In line CSS  */
/* Position 2. Style tag will win */
/* Position 3. External CSS will win */

/* RULE 2 */

// 2.1 ->  If the selector are exactly same then the rule who is coming afterwards will win */

// 2.2 -> ID > TAG > CLASS
/* 
    If we want to select  <p id="paraId" class="paraClass">Hey there guys whats up!!</p> 
    Then we can use Simple selection-> ID, Class, Combinator Selector.
*/

// 2.3 -> body #paraId VS #paraId -> body #paraId (because i am selecting ID with more info)
/* ID Unique Identification + more info  */

/* RULE 3: !important RULE (NEVER USE) (ONLY USE WHEN YOU HAVE A GUN ON YOU) */

/* It will override all the rules on top and will implement its own rule. */
