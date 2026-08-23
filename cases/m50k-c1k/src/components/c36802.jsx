import React from 'react';
const LABEL_36802 = 'component_36802';
export function Component36802({ value = 36802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36802, 'data-value': derived.doubled }, children);
}
export default Component36802;
