import React from 'react';
const LABEL_16125 = 'component_16125';
export function Component16125({ value = 16125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16125, 'data-value': derived.doubled }, children);
}
export default Component16125;
