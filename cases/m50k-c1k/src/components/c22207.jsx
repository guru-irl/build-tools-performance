import React from 'react';
const LABEL_22207 = 'component_22207';
export function Component22207({ value = 22207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22207, 'data-value': derived.doubled }, children);
}
export default Component22207;
