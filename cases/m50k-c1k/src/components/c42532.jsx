import React from 'react';
const LABEL_42532 = 'component_42532';
export function Component42532({ value = 42532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42532, 'data-value': derived.doubled }, children);
}
export default Component42532;
