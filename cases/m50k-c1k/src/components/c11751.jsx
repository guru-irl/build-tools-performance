import React from 'react';
const LABEL_11751 = 'component_11751';
export function Component11751({ value = 11751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11751, 'data-value': derived.doubled }, children);
}
export default Component11751;
