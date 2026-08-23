import React from 'react';
const LABEL_6700 = 'component_6700';
export function Component6700({ value = 6700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6700, 'data-value': derived.doubled }, children);
}
export default Component6700;
