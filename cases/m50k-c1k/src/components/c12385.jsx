import React from 'react';
const LABEL_12385 = 'component_12385';
export function Component12385({ value = 12385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12385, 'data-value': derived.doubled }, children);
}
export default Component12385;
