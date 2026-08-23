import React from 'react';
const LABEL_22054 = 'component_22054';
export function Component22054({ value = 22054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22054, 'data-value': derived.doubled }, children);
}
export default Component22054;
