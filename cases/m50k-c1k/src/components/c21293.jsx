import React from 'react';
const LABEL_21293 = 'component_21293';
export function Component21293({ value = 21293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21293, 'data-value': derived.doubled }, children);
}
export default Component21293;
