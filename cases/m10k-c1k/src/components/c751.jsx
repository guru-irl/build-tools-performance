import React from 'react';
const LABEL_751 = 'component_751';
export function Component751({ value = 751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_751, 'data-value': derived.doubled }, children);
}
export default Component751;
