import React from 'react';
const LABEL_7065 = 'component_7065';
export function Component7065({ value = 7065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7065, 'data-value': derived.doubled }, children);
}
export default Component7065;
