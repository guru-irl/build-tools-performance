import React from 'react';
const LABEL_2634 = 'component_2634';
export function Component2634({ value = 2634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2634, 'data-value': derived.doubled }, children);
}
export default Component2634;
