import React from 'react';
const LABEL_20272 = 'component_20272';
export function Component20272({ value = 20272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20272, 'data-value': derived.doubled }, children);
}
export default Component20272;
