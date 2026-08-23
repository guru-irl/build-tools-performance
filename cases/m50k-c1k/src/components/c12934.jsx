import React from 'react';
const LABEL_12934 = 'component_12934';
export function Component12934({ value = 12934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12934, 'data-value': derived.doubled }, children);
}
export default Component12934;
