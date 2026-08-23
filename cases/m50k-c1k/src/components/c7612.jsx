import React from 'react';
const LABEL_7612 = 'component_7612';
export function Component7612({ value = 7612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7612, 'data-value': derived.doubled }, children);
}
export default Component7612;
