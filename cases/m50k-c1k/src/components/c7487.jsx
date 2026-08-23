import React from 'react';
const LABEL_7487 = 'component_7487';
export function Component7487({ value = 7487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7487, 'data-value': derived.doubled }, children);
}
export default Component7487;
