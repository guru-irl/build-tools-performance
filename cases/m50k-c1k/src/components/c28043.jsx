import React from 'react';
const LABEL_28043 = 'component_28043';
export function Component28043({ value = 28043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28043, 'data-value': derived.doubled }, children);
}
export default Component28043;
