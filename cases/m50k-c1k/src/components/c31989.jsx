import React from 'react';
const LABEL_31989 = 'component_31989';
export function Component31989({ value = 31989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31989, 'data-value': derived.doubled }, children);
}
export default Component31989;
