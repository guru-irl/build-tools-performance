import React from 'react';
const LABEL_12361 = 'component_12361';
export function Component12361({ value = 12361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12361, 'data-value': derived.doubled }, children);
}
export default Component12361;
