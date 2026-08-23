import React from 'react';
const LABEL_6951 = 'component_6951';
export function Component6951({ value = 6951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6951, 'data-value': derived.doubled }, children);
}
export default Component6951;
