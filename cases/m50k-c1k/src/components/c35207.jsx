import React from 'react';
const LABEL_35207 = 'component_35207';
export function Component35207({ value = 35207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35207, 'data-value': derived.doubled }, children);
}
export default Component35207;
