import React from 'react';
const LABEL_17169 = 'component_17169';
export function Component17169({ value = 17169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17169, 'data-value': derived.doubled }, children);
}
export default Component17169;
