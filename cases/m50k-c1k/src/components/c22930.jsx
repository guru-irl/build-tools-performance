import React from 'react';
const LABEL_22930 = 'component_22930';
export function Component22930({ value = 22930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22930, 'data-value': derived.doubled }, children);
}
export default Component22930;
