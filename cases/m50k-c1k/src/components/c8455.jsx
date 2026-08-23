import React from 'react';
const LABEL_8455 = 'component_8455';
export function Component8455({ value = 8455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8455, 'data-value': derived.doubled }, children);
}
export default Component8455;
