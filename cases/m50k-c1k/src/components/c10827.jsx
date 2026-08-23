import React from 'react';
const LABEL_10827 = 'component_10827';
export function Component10827({ value = 10827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10827, 'data-value': derived.doubled }, children);
}
export default Component10827;
