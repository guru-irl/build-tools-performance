import React from 'react';
const LABEL_42785 = 'component_42785';
export function Component42785({ value = 42785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42785, 'data-value': derived.doubled }, children);
}
export default Component42785;
