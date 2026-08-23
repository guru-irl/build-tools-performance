import React from 'react';
const LABEL_10745 = 'component_10745';
export function Component10745({ value = 10745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10745, 'data-value': derived.doubled }, children);
}
export default Component10745;
