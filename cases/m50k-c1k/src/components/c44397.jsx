import React from 'react';
const LABEL_44397 = 'component_44397';
export function Component44397({ value = 44397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44397, 'data-value': derived.doubled }, children);
}
export default Component44397;
