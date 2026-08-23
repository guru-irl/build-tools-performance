import React from 'react';
const LABEL_14907 = 'component_14907';
export function Component14907({ value = 14907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14907, 'data-value': derived.doubled }, children);
}
export default Component14907;
