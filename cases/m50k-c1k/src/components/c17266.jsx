import React from 'react';
const LABEL_17266 = 'component_17266';
export function Component17266({ value = 17266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17266, 'data-value': derived.doubled }, children);
}
export default Component17266;
