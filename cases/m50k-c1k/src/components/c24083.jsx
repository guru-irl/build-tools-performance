import React from 'react';
const LABEL_24083 = 'component_24083';
export function Component24083({ value = 24083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24083, 'data-value': derived.doubled }, children);
}
export default Component24083;
