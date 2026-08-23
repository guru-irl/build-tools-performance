import React from 'react';
const LABEL_16272 = 'component_16272';
export function Component16272({ value = 16272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16272, 'data-value': derived.doubled }, children);
}
export default Component16272;
