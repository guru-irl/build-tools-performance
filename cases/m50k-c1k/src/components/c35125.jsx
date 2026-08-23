import React from 'react';
const LABEL_35125 = 'component_35125';
export function Component35125({ value = 35125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35125, 'data-value': derived.doubled }, children);
}
export default Component35125;
