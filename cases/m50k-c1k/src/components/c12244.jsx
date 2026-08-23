import React from 'react';
const LABEL_12244 = 'component_12244';
export function Component12244({ value = 12244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12244, 'data-value': derived.doubled }, children);
}
export default Component12244;
