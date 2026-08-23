import React from 'react';
const LABEL_9709 = 'component_9709';
export function Component9709({ value = 9709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9709, 'data-value': derived.doubled }, children);
}
export default Component9709;
