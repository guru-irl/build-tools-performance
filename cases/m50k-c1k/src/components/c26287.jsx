import React from 'react';
const LABEL_26287 = 'component_26287';
export function Component26287({ value = 26287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26287, 'data-value': derived.doubled }, children);
}
export default Component26287;
