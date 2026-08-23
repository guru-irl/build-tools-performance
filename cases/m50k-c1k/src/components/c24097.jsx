import React from 'react';
const LABEL_24097 = 'component_24097';
export function Component24097({ value = 24097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24097, 'data-value': derived.doubled }, children);
}
export default Component24097;
