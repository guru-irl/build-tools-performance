import React from 'react';
const LABEL_10222 = 'component_10222';
export function Component10222({ value = 10222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10222, 'data-value': derived.doubled }, children);
}
export default Component10222;
