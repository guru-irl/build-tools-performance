import React from 'react';
const LABEL_36951 = 'component_36951';
export function Component36951({ value = 36951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36951, 'data-value': derived.doubled }, children);
}
export default Component36951;
