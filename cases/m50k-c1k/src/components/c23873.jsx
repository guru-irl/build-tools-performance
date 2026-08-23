import React from 'react';
const LABEL_23873 = 'component_23873';
export function Component23873({ value = 23873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23873, 'data-value': derived.doubled }, children);
}
export default Component23873;
