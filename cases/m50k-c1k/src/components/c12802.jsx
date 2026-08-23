import React from 'react';
const LABEL_12802 = 'component_12802';
export function Component12802({ value = 12802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12802, 'data-value': derived.doubled }, children);
}
export default Component12802;
