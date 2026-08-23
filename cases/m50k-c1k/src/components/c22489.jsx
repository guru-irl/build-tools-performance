import React from 'react';
const LABEL_22489 = 'component_22489';
export function Component22489({ value = 22489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22489, 'data-value': derived.doubled }, children);
}
export default Component22489;
