import React from 'react';
const LABEL_42326 = 'component_42326';
export function Component42326({ value = 42326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42326, 'data-value': derived.doubled }, children);
}
export default Component42326;
