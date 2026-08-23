import React from 'react';
const LABEL_7605 = 'component_7605';
export function Component7605({ value = 7605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7605, 'data-value': derived.doubled }, children);
}
export default Component7605;
