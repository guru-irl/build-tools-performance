import React from 'react';
const LABEL_46846 = 'component_46846';
export function Component46846({ value = 46846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46846, 'data-value': derived.doubled }, children);
}
export default Component46846;
