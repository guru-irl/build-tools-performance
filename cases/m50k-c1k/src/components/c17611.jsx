import React from 'react';
const LABEL_17611 = 'component_17611';
export function Component17611({ value = 17611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17611, 'data-value': derived.doubled }, children);
}
export default Component17611;
