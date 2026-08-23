import React from 'react';
const LABEL_23487 = 'component_23487';
export function Component23487({ value = 23487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23487, 'data-value': derived.doubled }, children);
}
export default Component23487;
