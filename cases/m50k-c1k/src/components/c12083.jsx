import React from 'react';
const LABEL_12083 = 'component_12083';
export function Component12083({ value = 12083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12083, 'data-value': derived.doubled }, children);
}
export default Component12083;
