import React from 'react';
const LABEL_28310 = 'component_28310';
export function Component28310({ value = 28310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28310, 'data-value': derived.doubled }, children);
}
export default Component28310;
