import React from 'react';
const LABEL_17186 = 'component_17186';
export function Component17186({ value = 17186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17186, 'data-value': derived.doubled }, children);
}
export default Component17186;
