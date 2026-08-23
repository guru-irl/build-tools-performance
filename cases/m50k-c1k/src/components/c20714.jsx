import React from 'react';
const LABEL_20714 = 'component_20714';
export function Component20714({ value = 20714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20714, 'data-value': derived.doubled }, children);
}
export default Component20714;
