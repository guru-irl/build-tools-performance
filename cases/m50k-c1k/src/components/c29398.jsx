import React from 'react';
const LABEL_29398 = 'component_29398';
export function Component29398({ value = 29398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29398, 'data-value': derived.doubled }, children);
}
export default Component29398;
