import React from 'react';
const LABEL_22582 = 'component_22582';
export function Component22582({ value = 22582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22582, 'data-value': derived.doubled }, children);
}
export default Component22582;
