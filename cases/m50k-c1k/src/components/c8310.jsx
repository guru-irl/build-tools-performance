import React from 'react';
const LABEL_8310 = 'component_8310';
export function Component8310({ value = 8310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8310, 'data-value': derived.doubled }, children);
}
export default Component8310;
