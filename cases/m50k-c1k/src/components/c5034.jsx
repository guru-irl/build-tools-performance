import React from 'react';
const LABEL_5034 = 'component_5034';
export function Component5034({ value = 5034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5034, 'data-value': derived.doubled }, children);
}
export default Component5034;
