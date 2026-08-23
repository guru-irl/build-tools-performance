import React from 'react';
const LABEL_20157 = 'component_20157';
export function Component20157({ value = 20157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20157, 'data-value': derived.doubled }, children);
}
export default Component20157;
