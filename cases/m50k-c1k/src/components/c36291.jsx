import React from 'react';
const LABEL_36291 = 'component_36291';
export function Component36291({ value = 36291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36291, 'data-value': derived.doubled }, children);
}
export default Component36291;
