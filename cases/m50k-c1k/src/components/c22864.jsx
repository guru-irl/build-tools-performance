import React from 'react';
const LABEL_22864 = 'component_22864';
export function Component22864({ value = 22864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22864, 'data-value': derived.doubled }, children);
}
export default Component22864;
