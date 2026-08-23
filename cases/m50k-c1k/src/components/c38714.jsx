import React from 'react';
const LABEL_38714 = 'component_38714';
export function Component38714({ value = 38714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38714, 'data-value': derived.doubled }, children);
}
export default Component38714;
