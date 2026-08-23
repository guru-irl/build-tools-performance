import React from 'react';
const LABEL_20786 = 'component_20786';
export function Component20786({ value = 20786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20786, 'data-value': derived.doubled }, children);
}
export default Component20786;
