import React from 'react';
const LABEL_11065 = 'component_11065';
export function Component11065({ value = 11065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11065, 'data-value': derived.doubled }, children);
}
export default Component11065;
