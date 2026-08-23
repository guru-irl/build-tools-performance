import React from 'react';
const LABEL_5361 = 'component_5361';
export function Component5361({ value = 5361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5361, 'data-value': derived.doubled }, children);
}
export default Component5361;
