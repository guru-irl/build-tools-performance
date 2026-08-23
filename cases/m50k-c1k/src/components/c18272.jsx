import React from 'react';
const LABEL_18272 = 'component_18272';
export function Component18272({ value = 18272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18272, 'data-value': derived.doubled }, children);
}
export default Component18272;
