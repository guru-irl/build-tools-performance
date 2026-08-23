import React from 'react';
const LABEL_42397 = 'component_42397';
export function Component42397({ value = 42397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42397, 'data-value': derived.doubled }, children);
}
export default Component42397;
