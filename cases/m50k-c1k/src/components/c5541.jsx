import React from 'react';
const LABEL_5541 = 'component_5541';
export function Component5541({ value = 5541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5541, 'data-value': derived.doubled }, children);
}
export default Component5541;
