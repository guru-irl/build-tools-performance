import React from 'react';
const LABEL_11397 = 'component_11397';
export function Component11397({ value = 11397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11397, 'data-value': derived.doubled }, children);
}
export default Component11397;
