import React from 'react';
const LABEL_22415 = 'component_22415';
export function Component22415({ value = 22415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22415, 'data-value': derived.doubled }, children);
}
export default Component22415;
