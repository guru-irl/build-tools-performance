import React from 'react';
const LABEL_4714 = 'component_4714';
export function Component4714({ value = 4714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4714, 'data-value': derived.doubled }, children);
}
export default Component4714;
