import React from 'react';
const LABEL_23730 = 'component_23730';
export function Component23730({ value = 23730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23730, 'data-value': derived.doubled }, children);
}
export default Component23730;
