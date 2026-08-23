import React from 'react';
const LABEL_45206 = 'component_45206';
export function Component45206({ value = 45206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45206, 'data-value': derived.doubled }, children);
}
export default Component45206;
