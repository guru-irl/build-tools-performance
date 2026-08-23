import React from 'react';
const LABEL_38397 = 'component_38397';
export function Component38397({ value = 38397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38397, 'data-value': derived.doubled }, children);
}
export default Component38397;
