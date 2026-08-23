import React from 'react';
const LABEL_14227 = 'component_14227';
export function Component14227({ value = 14227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14227, 'data-value': derived.doubled }, children);
}
export default Component14227;
