import React from 'react';
const LABEL_35127 = 'component_35127';
export function Component35127({ value = 35127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35127, 'data-value': derived.doubled }, children);
}
export default Component35127;
