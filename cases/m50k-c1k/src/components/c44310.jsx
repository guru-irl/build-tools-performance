import React from 'react';
const LABEL_44310 = 'component_44310';
export function Component44310({ value = 44310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44310, 'data-value': derived.doubled }, children);
}
export default Component44310;
