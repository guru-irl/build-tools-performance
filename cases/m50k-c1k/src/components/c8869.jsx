import React from 'react';
const LABEL_8869 = 'component_8869';
export function Component8869({ value = 8869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8869, 'data-value': derived.doubled }, children);
}
export default Component8869;
