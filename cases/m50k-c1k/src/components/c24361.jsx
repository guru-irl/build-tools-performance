import React from 'react';
const LABEL_24361 = 'component_24361';
export function Component24361({ value = 24361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24361, 'data-value': derived.doubled }, children);
}
export default Component24361;
