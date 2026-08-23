import React from 'react';
const LABEL_6979 = 'component_6979';
export function Component6979({ value = 6979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6979, 'data-value': derived.doubled }, children);
}
export default Component6979;
