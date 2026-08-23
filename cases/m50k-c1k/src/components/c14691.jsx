import React from 'react';
const LABEL_14691 = 'component_14691';
export function Component14691({ value = 14691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14691, 'data-value': derived.doubled }, children);
}
export default Component14691;
