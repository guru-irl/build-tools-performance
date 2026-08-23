import React from 'react';
const LABEL_20766 = 'component_20766';
export function Component20766({ value = 20766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20766, 'data-value': derived.doubled }, children);
}
export default Component20766;
