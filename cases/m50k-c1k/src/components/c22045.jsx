import React from 'react';
const LABEL_22045 = 'component_22045';
export function Component22045({ value = 22045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22045, 'data-value': derived.doubled }, children);
}
export default Component22045;
