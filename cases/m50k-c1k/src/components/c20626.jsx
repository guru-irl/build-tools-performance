import React from 'react';
const LABEL_20626 = 'component_20626';
export function Component20626({ value = 20626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20626, 'data-value': derived.doubled }, children);
}
export default Component20626;
