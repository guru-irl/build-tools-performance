import React from 'react';
const LABEL_10043 = 'component_10043';
export function Component10043({ value = 10043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10043, 'data-value': derived.doubled }, children);
}
export default Component10043;
