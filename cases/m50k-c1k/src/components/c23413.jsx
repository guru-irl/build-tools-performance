import React from 'react';
const LABEL_23413 = 'component_23413';
export function Component23413({ value = 23413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23413, 'data-value': derived.doubled }, children);
}
export default Component23413;
