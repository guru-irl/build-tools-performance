import React from 'react';
const LABEL_45330 = 'component_45330';
export function Component45330({ value = 45330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45330, 'data-value': derived.doubled }, children);
}
export default Component45330;
