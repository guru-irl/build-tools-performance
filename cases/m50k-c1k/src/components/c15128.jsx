import React from 'react';
const LABEL_15128 = 'component_15128';
export function Component15128({ value = 15128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15128, 'data-value': derived.doubled }, children);
}
export default Component15128;
