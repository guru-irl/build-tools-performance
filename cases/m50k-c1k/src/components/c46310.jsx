import React from 'react';
const LABEL_46310 = 'component_46310';
export function Component46310({ value = 46310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46310, 'data-value': derived.doubled }, children);
}
export default Component46310;
