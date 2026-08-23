import React from 'react';
const LABEL_5397 = 'component_5397';
export function Component5397({ value = 5397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5397, 'data-value': derived.doubled }, children);
}
export default Component5397;
