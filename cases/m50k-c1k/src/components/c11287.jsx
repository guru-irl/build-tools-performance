import React from 'react';
const LABEL_11287 = 'component_11287';
export function Component11287({ value = 11287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11287, 'data-value': derived.doubled }, children);
}
export default Component11287;
