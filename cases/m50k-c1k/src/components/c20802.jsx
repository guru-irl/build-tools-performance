import React from 'react';
const LABEL_20802 = 'component_20802';
export function Component20802({ value = 20802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20802, 'data-value': derived.doubled }, children);
}
export default Component20802;
