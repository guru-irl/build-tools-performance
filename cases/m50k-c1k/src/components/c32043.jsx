import React from 'react';
const LABEL_32043 = 'component_32043';
export function Component32043({ value = 32043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32043, 'data-value': derived.doubled }, children);
}
export default Component32043;
