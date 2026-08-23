import React from 'react';
const LABEL_44907 = 'component_44907';
export function Component44907({ value = 44907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44907, 'data-value': derived.doubled }, children);
}
export default Component44907;
