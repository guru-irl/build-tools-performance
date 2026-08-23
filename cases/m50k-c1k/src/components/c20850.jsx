import React from 'react';
const LABEL_20850 = 'component_20850';
export function Component20850({ value = 20850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20850, 'data-value': derived.doubled }, children);
}
export default Component20850;
