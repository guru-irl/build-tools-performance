import React from 'react';
const LABEL_18397 = 'component_18397';
export function Component18397({ value = 18397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18397, 'data-value': derived.doubled }, children);
}
export default Component18397;
