import React from 'react';
const LABEL_22216 = 'component_22216';
export function Component22216({ value = 22216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22216, 'data-value': derived.doubled }, children);
}
export default Component22216;
