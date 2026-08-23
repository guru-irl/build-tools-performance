import React from 'react';
const LABEL_33672 = 'component_33672';
export function Component33672({ value = 33672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33672, 'data-value': derived.doubled }, children);
}
export default Component33672;
