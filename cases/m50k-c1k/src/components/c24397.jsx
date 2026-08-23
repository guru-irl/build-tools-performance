import React from 'react';
const LABEL_24397 = 'component_24397';
export function Component24397({ value = 24397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24397, 'data-value': derived.doubled }, children);
}
export default Component24397;
