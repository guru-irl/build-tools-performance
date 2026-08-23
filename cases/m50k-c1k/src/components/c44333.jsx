import React from 'react';
const LABEL_44333 = 'component_44333';
export function Component44333({ value = 44333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44333, 'data-value': derived.doubled }, children);
}
export default Component44333;
