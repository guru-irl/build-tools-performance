import React from 'react';
const LABEL_13997 = 'component_13997';
export function Component13997({ value = 13997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13997, 'data-value': derived.doubled }, children);
}
export default Component13997;
