import React from 'react';
const LABEL_33907 = 'component_33907';
export function Component33907({ value = 33907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33907, 'data-value': derived.doubled }, children);
}
export default Component33907;
