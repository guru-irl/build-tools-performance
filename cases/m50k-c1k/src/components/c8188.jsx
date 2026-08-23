import React from 'react';
const LABEL_8188 = 'component_8188';
export function Component8188({ value = 8188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8188, 'data-value': derived.doubled }, children);
}
export default Component8188;
