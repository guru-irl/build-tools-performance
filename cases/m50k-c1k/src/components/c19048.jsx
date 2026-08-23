import React from 'react';
const LABEL_19048 = 'component_19048';
export function Component19048({ value = 19048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19048, 'data-value': derived.doubled }, children);
}
export default Component19048;
