import React from 'react';
const LABEL_24879 = 'component_24879';
export function Component24879({ value = 24879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24879, 'data-value': derived.doubled }, children);
}
export default Component24879;
