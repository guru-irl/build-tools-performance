import React from 'react';
const LABEL_7751 = 'component_7751';
export function Component7751({ value = 7751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7751, 'data-value': derived.doubled }, children);
}
export default Component7751;
