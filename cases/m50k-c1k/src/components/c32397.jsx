import React from 'react';
const LABEL_32397 = 'component_32397';
export function Component32397({ value = 32397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32397, 'data-value': derived.doubled }, children);
}
export default Component32397;
