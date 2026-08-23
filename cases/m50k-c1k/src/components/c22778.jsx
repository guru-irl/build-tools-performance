import React from 'react';
const LABEL_22778 = 'component_22778';
export function Component22778({ value = 22778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22778, 'data-value': derived.doubled }, children);
}
export default Component22778;
