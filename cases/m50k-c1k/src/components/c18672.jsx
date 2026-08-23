import React from 'react';
const LABEL_18672 = 'component_18672';
export function Component18672({ value = 18672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18672, 'data-value': derived.doubled }, children);
}
export default Component18672;
