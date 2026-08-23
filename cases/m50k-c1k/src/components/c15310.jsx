import React from 'react';
const LABEL_15310 = 'component_15310';
export function Component15310({ value = 15310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15310, 'data-value': derived.doubled }, children);
}
export default Component15310;
