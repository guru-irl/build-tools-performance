import React from 'react';
const LABEL_15068 = 'component_15068';
export function Component15068({ value = 15068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15068, 'data-value': derived.doubled }, children);
}
export default Component15068;
