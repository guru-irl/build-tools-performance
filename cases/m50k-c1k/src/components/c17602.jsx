import React from 'react';
const LABEL_17602 = 'component_17602';
export function Component17602({ value = 17602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17602, 'data-value': derived.doubled }, children);
}
export default Component17602;
