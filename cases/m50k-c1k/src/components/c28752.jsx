import React from 'react';
const LABEL_28752 = 'component_28752';
export function Component28752({ value = 28752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28752, 'data-value': derived.doubled }, children);
}
export default Component28752;
