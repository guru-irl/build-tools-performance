import React from 'react';
const LABEL_36734 = 'component_36734';
export function Component36734({ value = 36734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36734, 'data-value': derived.doubled }, children);
}
export default Component36734;
