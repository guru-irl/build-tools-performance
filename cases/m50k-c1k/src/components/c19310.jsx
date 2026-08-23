import React from 'react';
const LABEL_19310 = 'component_19310';
export function Component19310({ value = 19310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19310, 'data-value': derived.doubled }, children);
}
export default Component19310;
