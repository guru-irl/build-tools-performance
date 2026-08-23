import React from 'react';
const LABEL_34043 = 'component_34043';
export function Component34043({ value = 34043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34043, 'data-value': derived.doubled }, children);
}
export default Component34043;
