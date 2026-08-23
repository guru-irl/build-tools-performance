import React from 'react';
const LABEL_40159 = 'component_40159';
export function Component40159({ value = 40159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40159, 'data-value': derived.doubled }, children);
}
export default Component40159;
