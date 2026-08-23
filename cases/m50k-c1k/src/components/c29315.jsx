import React from 'react';
const LABEL_29315 = 'component_29315';
export function Component29315({ value = 29315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29315, 'data-value': derived.doubled }, children);
}
export default Component29315;
