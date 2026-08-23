import React from 'react';
const LABEL_28408 = 'component_28408';
export function Component28408({ value = 28408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28408, 'data-value': derived.doubled }, children);
}
export default Component28408;
