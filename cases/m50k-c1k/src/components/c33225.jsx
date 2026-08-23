import React from 'react';
const LABEL_33225 = 'component_33225';
export function Component33225({ value = 33225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33225, 'data-value': derived.doubled }, children);
}
export default Component33225;
