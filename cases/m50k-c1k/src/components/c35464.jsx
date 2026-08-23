import React from 'react';
const LABEL_35464 = 'component_35464';
export function Component35464({ value = 35464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35464, 'data-value': derived.doubled }, children);
}
export default Component35464;
