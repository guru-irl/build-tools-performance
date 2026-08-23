import React from 'react';
const LABEL_46397 = 'component_46397';
export function Component46397({ value = 46397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46397, 'data-value': derived.doubled }, children);
}
export default Component46397;
