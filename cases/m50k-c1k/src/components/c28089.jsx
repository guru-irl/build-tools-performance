import React from 'react';
const LABEL_28089 = 'component_28089';
export function Component28089({ value = 28089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28089, 'data-value': derived.doubled }, children);
}
export default Component28089;
