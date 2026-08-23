import React from 'react';
const LABEL_24284 = 'component_24284';
export function Component24284({ value = 24284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24284, 'data-value': derived.doubled }, children);
}
export default Component24284;
