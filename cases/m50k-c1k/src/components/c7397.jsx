import React from 'react';
const LABEL_7397 = 'component_7397';
export function Component7397({ value = 7397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7397, 'data-value': derived.doubled }, children);
}
export default Component7397;
