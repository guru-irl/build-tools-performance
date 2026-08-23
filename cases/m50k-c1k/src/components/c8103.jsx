import React from 'react';
const LABEL_8103 = 'component_8103';
export function Component8103({ value = 8103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8103, 'data-value': derived.doubled }, children);
}
export default Component8103;
