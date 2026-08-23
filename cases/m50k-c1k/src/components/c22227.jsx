import React from 'react';
const LABEL_22227 = 'component_22227';
export function Component22227({ value = 22227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22227, 'data-value': derived.doubled }, children);
}
export default Component22227;
