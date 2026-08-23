import React from 'react';
const LABEL_23189 = 'component_23189';
export function Component23189({ value = 23189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23189, 'data-value': derived.doubled }, children);
}
export default Component23189;
