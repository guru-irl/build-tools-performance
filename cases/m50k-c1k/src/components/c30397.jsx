import React from 'react';
const LABEL_30397 = 'component_30397';
export function Component30397({ value = 30397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30397, 'data-value': derived.doubled }, children);
}
export default Component30397;
