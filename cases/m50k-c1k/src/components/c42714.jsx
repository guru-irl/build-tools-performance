import React from 'react';
const LABEL_42714 = 'component_42714';
export function Component42714({ value = 42714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42714, 'data-value': derived.doubled }, children);
}
export default Component42714;
