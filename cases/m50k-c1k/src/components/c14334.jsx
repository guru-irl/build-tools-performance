import React from 'react';
const LABEL_14334 = 'component_14334';
export function Component14334({ value = 14334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14334, 'data-value': derived.doubled }, children);
}
export default Component14334;
