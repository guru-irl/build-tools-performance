import React from 'react';
const LABEL_35397 = 'component_35397';
export function Component35397({ value = 35397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35397, 'data-value': derived.doubled }, children);
}
export default Component35397;
