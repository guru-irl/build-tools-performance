import React from 'react';
const LABEL_5287 = 'component_5287';
export function Component5287({ value = 5287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5287, 'data-value': derived.doubled }, children);
}
export default Component5287;
