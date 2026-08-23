import React from 'react';
const LABEL_3485 = 'component_3485';
export function Component3485({ value = 3485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3485, 'data-value': derived.doubled }, children);
}
export default Component3485;
