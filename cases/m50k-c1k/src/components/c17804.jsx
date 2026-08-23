import React from 'react';
const LABEL_17804 = 'component_17804';
export function Component17804({ value = 17804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17804, 'data-value': derived.doubled }, children);
}
export default Component17804;
