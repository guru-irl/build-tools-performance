import React from 'react';
const LABEL_16397 = 'component_16397';
export function Component16397({ value = 16397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16397, 'data-value': derived.doubled }, children);
}
export default Component16397;
