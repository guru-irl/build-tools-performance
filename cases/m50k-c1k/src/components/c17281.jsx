import React from 'react';
const LABEL_17281 = 'component_17281';
export function Component17281({ value = 17281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17281, 'data-value': derived.doubled }, children);
}
export default Component17281;
