import React from 'react';
const LABEL_1272 = 'component_1272';
export function Component1272({ value = 1272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1272, 'data-value': derived.doubled }, children);
}
export default Component1272;
