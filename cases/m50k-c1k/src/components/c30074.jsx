import React from 'react';
const LABEL_30074 = 'component_30074';
export function Component30074({ value = 30074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30074, 'data-value': derived.doubled }, children);
}
export default Component30074;
