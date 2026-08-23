import React from 'react';
const LABEL_12160 = 'component_12160';
export function Component12160({ value = 12160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12160, 'data-value': derived.doubled }, children);
}
export default Component12160;
