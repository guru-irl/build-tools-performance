import React from 'react';
const LABEL_32964 = 'component_32964';
export function Component32964({ value = 32964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32964, 'data-value': derived.doubled }, children);
}
export default Component32964;
