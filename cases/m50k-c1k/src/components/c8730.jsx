import React from 'react';
const LABEL_8730 = 'component_8730';
export function Component8730({ value = 8730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8730, 'data-value': derived.doubled }, children);
}
export default Component8730;
