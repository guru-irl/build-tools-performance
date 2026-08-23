import React from 'react';
const LABEL_12491 = 'component_12491';
export function Component12491({ value = 12491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12491, 'data-value': derived.doubled }, children);
}
export default Component12491;
