import React from 'react';
const LABEL_12179 = 'component_12179';
export function Component12179({ value = 12179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12179, 'data-value': derived.doubled }, children);
}
export default Component12179;
