import React from 'react';
const LABEL_7116 = 'component_7116';
export function Component7116({ value = 7116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7116, 'data-value': derived.doubled }, children);
}
export default Component7116;
