import React from 'react';
const LABEL_24338 = 'component_24338';
export function Component24338({ value = 24338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24338, 'data-value': derived.doubled }, children);
}
export default Component24338;
