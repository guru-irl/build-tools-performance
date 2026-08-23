import React from 'react';
const LABEL_17674 = 'component_17674';
export function Component17674({ value = 17674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17674, 'data-value': derived.doubled }, children);
}
export default Component17674;
