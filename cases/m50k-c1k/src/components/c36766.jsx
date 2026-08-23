import React from 'react';
const LABEL_36766 = 'component_36766';
export function Component36766({ value = 36766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36766, 'data-value': derived.doubled }, children);
}
export default Component36766;
