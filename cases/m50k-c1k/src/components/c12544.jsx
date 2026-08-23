import React from 'react';
const LABEL_12544 = 'component_12544';
export function Component12544({ value = 12544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12544, 'data-value': derived.doubled }, children);
}
export default Component12544;
