import React from 'react';
const LABEL_22355 = 'component_22355';
export function Component22355({ value = 22355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22355, 'data-value': derived.doubled }, children);
}
export default Component22355;
