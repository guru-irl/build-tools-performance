import React from 'react';
const LABEL_34083 = 'component_34083';
export function Component34083({ value = 34083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34083, 'data-value': derived.doubled }, children);
}
export default Component34083;
