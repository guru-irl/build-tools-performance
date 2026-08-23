import React from 'react';
const LABEL_14396 = 'component_14396';
export function Component14396({ value = 14396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14396, 'data-value': derived.doubled }, children);
}
export default Component14396;
