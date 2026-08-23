import React from 'react';
const LABEL_23098 = 'component_23098';
export function Component23098({ value = 23098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23098, 'data-value': derived.doubled }, children);
}
export default Component23098;
