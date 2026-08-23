import React from 'react';
const LABEL_8532 = 'component_8532';
export function Component8532({ value = 8532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8532, 'data-value': derived.doubled }, children);
}
export default Component8532;
