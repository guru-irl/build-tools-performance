import React from 'react';
const LABEL_12482 = 'component_12482';
export function Component12482({ value = 12482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12482, 'data-value': derived.doubled }, children);
}
export default Component12482;
