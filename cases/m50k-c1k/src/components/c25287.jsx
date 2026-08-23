import React from 'react';
const LABEL_25287 = 'component_25287';
export function Component25287({ value = 25287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25287, 'data-value': derived.doubled }, children);
}
export default Component25287;
