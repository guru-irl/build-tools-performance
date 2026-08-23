import React from 'react';
const LABEL_8227 = 'component_8227';
export function Component8227({ value = 8227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8227, 'data-value': derived.doubled }, children);
}
export default Component8227;
