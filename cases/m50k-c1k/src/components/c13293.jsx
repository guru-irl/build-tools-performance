import React from 'react';
const LABEL_13293 = 'component_13293';
export function Component13293({ value = 13293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13293, 'data-value': derived.doubled }, children);
}
export default Component13293;
