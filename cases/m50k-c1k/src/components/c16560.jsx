import React from 'react';
const LABEL_16560 = 'component_16560';
export function Component16560({ value = 16560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16560, 'data-value': derived.doubled }, children);
}
export default Component16560;
