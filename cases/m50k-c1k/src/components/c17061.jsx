import React from 'react';
const LABEL_17061 = 'component_17061';
export function Component17061({ value = 17061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17061, 'data-value': derived.doubled }, children);
}
export default Component17061;
