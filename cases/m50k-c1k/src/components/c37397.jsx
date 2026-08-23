import React from 'react';
const LABEL_37397 = 'component_37397';
export function Component37397({ value = 37397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37397, 'data-value': derived.doubled }, children);
}
export default Component37397;
