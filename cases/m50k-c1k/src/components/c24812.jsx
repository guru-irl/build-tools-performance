import React from 'react';
const LABEL_24812 = 'component_24812';
export function Component24812({ value = 24812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24812, 'data-value': derived.doubled }, children);
}
export default Component24812;
