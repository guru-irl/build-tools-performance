import React from 'react';
const LABEL_25074 = 'component_25074';
export function Component25074({ value = 25074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25074, 'data-value': derived.doubled }, children);
}
export default Component25074;
