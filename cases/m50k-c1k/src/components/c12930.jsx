import React from 'react';
const LABEL_12930 = 'component_12930';
export function Component12930({ value = 12930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12930, 'data-value': derived.doubled }, children);
}
export default Component12930;
