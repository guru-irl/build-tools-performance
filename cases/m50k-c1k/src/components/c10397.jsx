import React from 'react';
const LABEL_10397 = 'component_10397';
export function Component10397({ value = 10397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10397, 'data-value': derived.doubled }, children);
}
export default Component10397;
