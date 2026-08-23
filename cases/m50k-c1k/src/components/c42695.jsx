import React from 'react';
const LABEL_42695 = 'component_42695';
export function Component42695({ value = 42695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42695, 'data-value': derived.doubled }, children);
}
export default Component42695;
