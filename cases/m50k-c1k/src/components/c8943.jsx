import React from 'react';
const LABEL_8943 = 'component_8943';
export function Component8943({ value = 8943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8943, 'data-value': derived.doubled }, children);
}
export default Component8943;
