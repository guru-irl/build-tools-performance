import React from 'react';
const LABEL_16159 = 'component_16159';
export function Component16159({ value = 16159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16159, 'data-value': derived.doubled }, children);
}
export default Component16159;
