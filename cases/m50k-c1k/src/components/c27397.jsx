import React from 'react';
const LABEL_27397 = 'component_27397';
export function Component27397({ value = 27397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27397, 'data-value': derived.doubled }, children);
}
export default Component27397;
