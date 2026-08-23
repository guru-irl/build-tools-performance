import React from 'react';
const LABEL_21072 = 'component_21072';
export function Component21072({ value = 21072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21072, 'data-value': derived.doubled }, children);
}
export default Component21072;
