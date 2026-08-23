import React from 'react';
const LABEL_28714 = 'component_28714';
export function Component28714({ value = 28714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28714, 'data-value': derived.doubled }, children);
}
export default Component28714;
