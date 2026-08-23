import React from 'react';
const LABEL_33261 = 'component_33261';
export function Component33261({ value = 33261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33261, 'data-value': derived.doubled }, children);
}
export default Component33261;
