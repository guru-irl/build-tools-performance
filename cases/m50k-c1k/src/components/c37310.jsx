import React from 'react';
const LABEL_37310 = 'component_37310';
export function Component37310({ value = 37310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37310, 'data-value': derived.doubled }, children);
}
export default Component37310;
