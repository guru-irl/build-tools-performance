import React from 'react';
const LABEL_29454 = 'component_29454';
export function Component29454({ value = 29454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29454, 'data-value': derived.doubled }, children);
}
export default Component29454;
