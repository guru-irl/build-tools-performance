import React from 'react';
const LABEL_10562 = 'component_10562';
export function Component10562({ value = 10562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10562, 'data-value': derived.doubled }, children);
}
export default Component10562;
