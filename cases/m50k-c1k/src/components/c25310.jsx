import React from 'react';
const LABEL_25310 = 'component_25310';
export function Component25310({ value = 25310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25310, 'data-value': derived.doubled }, children);
}
export default Component25310;
