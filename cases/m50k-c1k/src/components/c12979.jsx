import React from 'react';
const LABEL_12979 = 'component_12979';
export function Component12979({ value = 12979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12979, 'data-value': derived.doubled }, children);
}
export default Component12979;
