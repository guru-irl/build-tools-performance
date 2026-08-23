import React from 'react';
const LABEL_33562 = 'component_33562';
export function Component33562({ value = 33562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33562, 'data-value': derived.doubled }, children);
}
export default Component33562;
