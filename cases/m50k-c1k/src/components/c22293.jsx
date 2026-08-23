import React from 'react';
const LABEL_22293 = 'component_22293';
export function Component22293({ value = 22293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22293, 'data-value': derived.doubled }, children);
}
export default Component22293;
