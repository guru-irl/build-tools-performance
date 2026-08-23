import React from 'react';
const LABEL_2455 = 'component_2455';
export function Component2455({ value = 2455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2455, 'data-value': derived.doubled }, children);
}
export default Component2455;
