import React from 'react';
const LABEL_20177 = 'component_20177';
export function Component20177({ value = 20177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20177, 'data-value': derived.doubled }, children);
}
export default Component20177;
