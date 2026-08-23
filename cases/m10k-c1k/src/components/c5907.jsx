import React from 'react';
const LABEL_5907 = 'component_5907';
export function Component5907({ value = 5907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5907, 'data-value': derived.doubled }, children);
}
export default Component5907;
