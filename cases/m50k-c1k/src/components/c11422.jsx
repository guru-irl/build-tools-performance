import React from 'react';
const LABEL_11422 = 'component_11422';
export function Component11422({ value = 11422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11422, 'data-value': derived.doubled }, children);
}
export default Component11422;
