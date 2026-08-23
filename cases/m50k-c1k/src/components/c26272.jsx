import React from 'react';
const LABEL_26272 = 'component_26272';
export function Component26272({ value = 26272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26272, 'data-value': derived.doubled }, children);
}
export default Component26272;
