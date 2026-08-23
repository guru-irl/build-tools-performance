import React from 'react';
const LABEL_45310 = 'component_45310';
export function Component45310({ value = 45310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45310, 'data-value': derived.doubled }, children);
}
export default Component45310;
