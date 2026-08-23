import React from 'react';
const LABEL_12034 = 'component_12034';
export function Component12034({ value = 12034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12034, 'data-value': derived.doubled }, children);
}
export default Component12034;
