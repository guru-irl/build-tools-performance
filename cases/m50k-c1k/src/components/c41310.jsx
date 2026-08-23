import React from 'react';
const LABEL_41310 = 'component_41310';
export function Component41310({ value = 41310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41310, 'data-value': derived.doubled }, children);
}
export default Component41310;
