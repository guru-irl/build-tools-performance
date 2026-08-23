import React from 'react';
const LABEL_10116 = 'component_10116';
export function Component10116({ value = 10116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10116, 'data-value': derived.doubled }, children);
}
export default Component10116;
