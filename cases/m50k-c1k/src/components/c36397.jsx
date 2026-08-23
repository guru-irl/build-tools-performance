import React from 'react';
const LABEL_36397 = 'component_36397';
export function Component36397({ value = 36397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36397, 'data-value': derived.doubled }, children);
}
export default Component36397;
