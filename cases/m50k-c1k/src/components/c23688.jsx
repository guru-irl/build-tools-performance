import React from 'react';
const LABEL_23688 = 'component_23688';
export function Component23688({ value = 23688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23688, 'data-value': derived.doubled }, children);
}
export default Component23688;
