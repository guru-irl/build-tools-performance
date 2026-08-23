import React from 'react';
const LABEL_11034 = 'component_11034';
export function Component11034({ value = 11034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11034, 'data-value': derived.doubled }, children);
}
export default Component11034;
