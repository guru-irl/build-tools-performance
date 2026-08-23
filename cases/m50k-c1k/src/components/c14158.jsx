import React from 'react';
const LABEL_14158 = 'component_14158';
export function Component14158({ value = 14158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14158, 'data-value': derived.doubled }, children);
}
export default Component14158;
