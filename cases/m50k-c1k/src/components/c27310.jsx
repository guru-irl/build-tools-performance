import React from 'react';
const LABEL_27310 = 'component_27310';
export function Component27310({ value = 27310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27310, 'data-value': derived.doubled }, children);
}
export default Component27310;
