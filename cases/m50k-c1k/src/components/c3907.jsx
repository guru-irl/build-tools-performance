import React from 'react';
const LABEL_3907 = 'component_3907';
export function Component3907({ value = 3907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3907, 'data-value': derived.doubled }, children);
}
export default Component3907;
