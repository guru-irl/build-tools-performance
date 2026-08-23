import React from 'react';
const LABEL_32310 = 'component_32310';
export function Component32310({ value = 32310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32310, 'data-value': derived.doubled }, children);
}
export default Component32310;
