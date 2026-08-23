import React from 'react';
const LABEL_17869 = 'component_17869';
export function Component17869({ value = 17869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17869, 'data-value': derived.doubled }, children);
}
export default Component17869;
