import React from 'react';
const LABEL_26310 = 'component_26310';
export function Component26310({ value = 26310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26310, 'data-value': derived.doubled }, children);
}
export default Component26310;
