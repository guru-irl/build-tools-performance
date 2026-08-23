import React from 'react';
const LABEL_12488 = 'component_12488';
export function Component12488({ value = 12488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12488, 'data-value': derived.doubled }, children);
}
export default Component12488;
