import React from 'react';
const LABEL_10057 = 'component_10057';
export function Component10057({ value = 10057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10057, 'data-value': derived.doubled }, children);
}
export default Component10057;
