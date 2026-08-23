import React from 'react';
const LABEL_36137 = 'component_36137';
export function Component36137({ value = 36137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36137, 'data-value': derived.doubled }, children);
}
export default Component36137;
