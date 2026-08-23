import React from 'react';
const LABEL_46612 = 'component_46612';
export function Component46612({ value = 46612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46612, 'data-value': derived.doubled }, children);
}
export default Component46612;
