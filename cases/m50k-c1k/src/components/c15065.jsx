import React from 'react';
const LABEL_15065 = 'component_15065';
export function Component15065({ value = 15065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15065, 'data-value': derived.doubled }, children);
}
export default Component15065;
