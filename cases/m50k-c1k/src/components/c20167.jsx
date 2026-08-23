import React from 'react';
const LABEL_20167 = 'component_20167';
export function Component20167({ value = 20167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20167, 'data-value': derived.doubled }, children);
}
export default Component20167;
