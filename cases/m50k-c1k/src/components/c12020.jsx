import React from 'react';
const LABEL_12020 = 'component_12020';
export function Component12020({ value = 12020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12020, 'data-value': derived.doubled }, children);
}
export default Component12020;
