import React from 'react';
const LABEL_2930 = 'component_2930';
export function Component2930({ value = 2930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2930, 'data-value': derived.doubled }, children);
}
export default Component2930;
