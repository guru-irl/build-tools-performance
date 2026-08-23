import React from 'react';
const LABEL_40397 = 'component_40397';
export function Component40397({ value = 40397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40397, 'data-value': derived.doubled }, children);
}
export default Component40397;
