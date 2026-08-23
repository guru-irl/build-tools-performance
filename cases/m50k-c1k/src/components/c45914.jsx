import React from 'react';
const LABEL_45914 = 'component_45914';
export function Component45914({ value = 45914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45914, 'data-value': derived.doubled }, children);
}
export default Component45914;
