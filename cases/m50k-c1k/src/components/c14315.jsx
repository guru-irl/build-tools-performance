import React from 'react';
const LABEL_14315 = 'component_14315';
export function Component14315({ value = 14315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14315, 'data-value': derived.doubled }, children);
}
export default Component14315;
