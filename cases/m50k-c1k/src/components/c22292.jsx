import React from 'react';
const LABEL_22292 = 'component_22292';
export function Component22292({ value = 22292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22292, 'data-value': derived.doubled }, children);
}
export default Component22292;
