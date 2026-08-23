import React from 'react';
const LABEL_15402 = 'component_15402';
export function Component15402({ value = 15402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15402, 'data-value': derived.doubled }, children);
}
export default Component15402;
