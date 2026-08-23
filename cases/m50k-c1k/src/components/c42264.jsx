import React from 'react';
const LABEL_42264 = 'component_42264';
export function Component42264({ value = 42264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42264, 'data-value': derived.doubled }, children);
}
export default Component42264;
