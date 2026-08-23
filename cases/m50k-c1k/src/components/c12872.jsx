import React from 'react';
const LABEL_12872 = 'component_12872';
export function Component12872({ value = 12872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12872, 'data-value': derived.doubled }, children);
}
export default Component12872;
