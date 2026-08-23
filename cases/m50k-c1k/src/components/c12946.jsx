import React from 'react';
const LABEL_12946 = 'component_12946';
export function Component12946({ value = 12946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12946, 'data-value': derived.doubled }, children);
}
export default Component12946;
