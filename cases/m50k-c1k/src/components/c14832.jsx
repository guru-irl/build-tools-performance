import React from 'react';
const LABEL_14832 = 'component_14832';
export function Component14832({ value = 14832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14832, 'data-value': derived.doubled }, children);
}
export default Component14832;
