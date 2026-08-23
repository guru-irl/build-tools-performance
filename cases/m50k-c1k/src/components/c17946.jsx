import React from 'react';
const LABEL_17946 = 'component_17946';
export function Component17946({ value = 17946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17946, 'data-value': derived.doubled }, children);
}
export default Component17946;
