import React from 'react';
const LABEL_20505 = 'component_20505';
export function Component20505({ value = 20505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20505, 'data-value': derived.doubled }, children);
}
export default Component20505;
