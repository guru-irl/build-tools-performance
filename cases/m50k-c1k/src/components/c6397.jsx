import React from 'react';
const LABEL_6397 = 'component_6397';
export function Component6397({ value = 6397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6397, 'data-value': derived.doubled }, children);
}
export default Component6397;
