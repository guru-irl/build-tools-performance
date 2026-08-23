import React from 'react';
const LABEL_1990 = 'component_1990';
export function Component1990({ value = 1990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1990, 'data-value': derived.doubled }, children);
}
export default Component1990;
