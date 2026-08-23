import React from 'react';
const LABEL_951 = 'component_951';
export function Component951({ value = 951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_951, 'data-value': derived.doubled }, children);
}
export default Component951;
