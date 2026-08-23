import React from 'react';
const LABEL_29666 = 'component_29666';
export function Component29666({ value = 29666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29666, 'data-value': derived.doubled }, children);
}
export default Component29666;
