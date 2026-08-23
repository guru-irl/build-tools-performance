import React from 'react';
const LABEL_12036 = 'component_12036';
export function Component12036({ value = 12036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12036, 'data-value': derived.doubled }, children);
}
export default Component12036;
