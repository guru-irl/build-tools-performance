import React from 'react';
const LABEL_5877 = 'component_5877';
export function Component5877({ value = 5877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5877, 'data-value': derived.doubled }, children);
}
export default Component5877;
