import React from 'react';
const LABEL_32385 = 'component_32385';
export function Component32385({ value = 32385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32385, 'data-value': derived.doubled }, children);
}
export default Component32385;
