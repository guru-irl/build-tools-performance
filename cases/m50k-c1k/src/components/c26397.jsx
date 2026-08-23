import React from 'react';
const LABEL_26397 = 'component_26397';
export function Component26397({ value = 26397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26397, 'data-value': derived.doubled }, children);
}
export default Component26397;
