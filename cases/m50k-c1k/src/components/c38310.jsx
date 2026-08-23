import React from 'react';
const LABEL_38310 = 'component_38310';
export function Component38310({ value = 38310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38310, 'data-value': derived.doubled }, children);
}
export default Component38310;
