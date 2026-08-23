import React from 'react';
const LABEL_32063 = 'component_32063';
export function Component32063({ value = 32063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32063, 'data-value': derived.doubled }, children);
}
export default Component32063;
