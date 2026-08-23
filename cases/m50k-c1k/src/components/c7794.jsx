import React from 'react';
const LABEL_7794 = 'component_7794';
export function Component7794({ value = 7794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7794, 'data-value': derived.doubled }, children);
}
export default Component7794;
