import React from 'react';
const LABEL_8252 = 'component_8252';
export function Component8252({ value = 8252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8252, 'data-value': derived.doubled }, children);
}
export default Component8252;
