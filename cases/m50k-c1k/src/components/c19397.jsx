import React from 'react';
const LABEL_19397 = 'component_19397';
export function Component19397({ value = 19397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19397, 'data-value': derived.doubled }, children);
}
export default Component19397;
