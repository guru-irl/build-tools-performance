import React from 'react';
const LABEL_22714 = 'component_22714';
export function Component22714({ value = 22714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22714, 'data-value': derived.doubled }, children);
}
export default Component22714;
