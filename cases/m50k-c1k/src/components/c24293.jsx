import React from 'react';
const LABEL_24293 = 'component_24293';
export function Component24293({ value = 24293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24293, 'data-value': derived.doubled }, children);
}
export default Component24293;
