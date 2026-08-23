import React from 'react';
const LABEL_8397 = 'component_8397';
export function Component8397({ value = 8397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8397, 'data-value': derived.doubled }, children);
}
export default Component8397;
