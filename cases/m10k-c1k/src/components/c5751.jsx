import React from 'react';
const LABEL_5751 = 'component_5751';
export function Component5751({ value = 5751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5751, 'data-value': derived.doubled }, children);
}
export default Component5751;
