import React from 'react';
const LABEL_24794 = 'component_24794';
export function Component24794({ value = 24794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24794, 'data-value': derived.doubled }, children);
}
export default Component24794;
