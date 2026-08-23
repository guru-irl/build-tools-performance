import React from 'react';
const LABEL_4497 = 'component_4497';
export function Component4497({ value = 4497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4497, 'data-value': derived.doubled }, children);
}
export default Component4497;
