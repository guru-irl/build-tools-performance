import React from 'react';
const LABEL_26413 = 'component_26413';
export function Component26413({ value = 26413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26413, 'data-value': derived.doubled }, children);
}
export default Component26413;
