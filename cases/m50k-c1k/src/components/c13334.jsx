import React from 'react';
const LABEL_13334 = 'component_13334';
export function Component13334({ value = 13334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13334, 'data-value': derived.doubled }, children);
}
export default Component13334;
