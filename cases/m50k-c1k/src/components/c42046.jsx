import React from 'react';
const LABEL_42046 = 'component_42046';
export function Component42046({ value = 42046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42046, 'data-value': derived.doubled }, children);
}
export default Component42046;
