import React from 'react';
const LABEL_15956 = 'component_15956';
export function Component15956({ value = 15956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15956, 'data-value': derived.doubled }, children);
}
export default Component15956;
