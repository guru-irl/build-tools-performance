import React from 'react';
const LABEL_18907 = 'component_18907';
export function Component18907({ value = 18907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18907, 'data-value': derived.doubled }, children);
}
export default Component18907;
