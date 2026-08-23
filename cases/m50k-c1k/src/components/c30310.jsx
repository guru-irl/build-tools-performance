import React from 'react';
const LABEL_30310 = 'component_30310';
export function Component30310({ value = 30310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30310, 'data-value': derived.doubled }, children);
}
export default Component30310;
