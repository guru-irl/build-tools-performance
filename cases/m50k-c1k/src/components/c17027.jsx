import React from 'react';
const LABEL_17027 = 'component_17027';
export function Component17027({ value = 17027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17027, 'data-value': derived.doubled }, children);
}
export default Component17027;
