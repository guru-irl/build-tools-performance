import React from 'react';
const LABEL_38063 = 'component_38063';
export function Component38063({ value = 38063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38063, 'data-value': derived.doubled }, children);
}
export default Component38063;
