import React from 'react';
const LABEL_10188 = 'component_10188';
export function Component10188({ value = 10188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10188, 'data-value': derived.doubled }, children);
}
export default Component10188;
