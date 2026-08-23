import React from 'react';
const LABEL_17384 = 'component_17384';
export function Component17384({ value = 17384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17384, 'data-value': derived.doubled }, children);
}
export default Component17384;
