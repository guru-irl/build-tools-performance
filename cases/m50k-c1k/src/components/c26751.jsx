import React from 'react';
const LABEL_26751 = 'component_26751';
export function Component26751({ value = 26751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26751, 'data-value': derived.doubled }, children);
}
export default Component26751;
