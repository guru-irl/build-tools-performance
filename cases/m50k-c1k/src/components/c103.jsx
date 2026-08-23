import React from 'react';
const LABEL_103 = 'component_103';
export function Component103({ value = 103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_103, 'data-value': derived.doubled }, children);
}
export default Component103;
