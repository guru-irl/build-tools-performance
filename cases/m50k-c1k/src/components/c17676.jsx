import React from 'react';
const LABEL_17676 = 'component_17676';
export function Component17676({ value = 17676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17676, 'data-value': derived.doubled }, children);
}
export default Component17676;
