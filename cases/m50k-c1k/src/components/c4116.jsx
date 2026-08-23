import React from 'react';
const LABEL_4116 = 'component_4116';
export function Component4116({ value = 4116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4116, 'data-value': derived.doubled }, children);
}
export default Component4116;
