import React from 'react';
const LABEL_6714 = 'component_6714';
export function Component6714({ value = 6714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6714, 'data-value': derived.doubled }, children);
}
export default Component6714;
