import React from 'react';
const LABEL_10695 = 'component_10695';
export function Component10695({ value = 10695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10695, 'data-value': derived.doubled }, children);
}
export default Component10695;
