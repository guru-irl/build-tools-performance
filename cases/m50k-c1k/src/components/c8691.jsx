import React from 'react';
const LABEL_8691 = 'component_8691';
export function Component8691({ value = 8691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8691, 'data-value': derived.doubled }, children);
}
export default Component8691;
