import React from 'react';
const LABEL_15244 = 'component_15244';
export function Component15244({ value = 15244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15244, 'data-value': derived.doubled }, children);
}
export default Component15244;
