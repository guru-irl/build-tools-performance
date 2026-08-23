import React from 'react';
const LABEL_10151 = 'component_10151';
export function Component10151({ value = 10151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10151, 'data-value': derived.doubled }, children);
}
export default Component10151;
