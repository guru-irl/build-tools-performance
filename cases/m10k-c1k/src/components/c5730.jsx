import React from 'react';
const LABEL_5730 = 'component_5730';
export function Component5730({ value = 5730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5730, 'data-value': derived.doubled }, children);
}
export default Component5730;
