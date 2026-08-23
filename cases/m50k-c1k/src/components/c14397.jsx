import React from 'react';
const LABEL_14397 = 'component_14397';
export function Component14397({ value = 14397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14397, 'data-value': derived.doubled }, children);
}
export default Component14397;
