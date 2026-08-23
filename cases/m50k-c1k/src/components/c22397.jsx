import React from 'react';
const LABEL_22397 = 'component_22397';
export function Component22397({ value = 22397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22397, 'data-value': derived.doubled }, children);
}
export default Component22397;
