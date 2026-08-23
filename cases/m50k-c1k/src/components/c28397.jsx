import React from 'react';
const LABEL_28397 = 'component_28397';
export function Component28397({ value = 28397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28397, 'data-value': derived.doubled }, children);
}
export default Component28397;
