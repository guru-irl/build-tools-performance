import React from 'react';
const LABEL_22855 = 'component_22855';
export function Component22855({ value = 22855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22855, 'data-value': derived.doubled }, children);
}
export default Component22855;
