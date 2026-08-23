import React from 'react';
const LABEL_34397 = 'component_34397';
export function Component34397({ value = 34397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34397, 'data-value': derived.doubled }, children);
}
export default Component34397;
