import React from 'react';
const LABEL_43398 = 'component_43398';
export function Component43398({ value = 43398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43398, 'data-value': derived.doubled }, children);
}
export default Component43398;
