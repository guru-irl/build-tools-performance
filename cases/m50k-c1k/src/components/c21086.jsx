import React from 'react';
const LABEL_21086 = 'component_21086';
export function Component21086({ value = 21086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21086, 'data-value': derived.doubled }, children);
}
export default Component21086;
