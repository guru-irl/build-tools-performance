import React from 'react';
const LABEL_22044 = 'component_22044';
export function Component22044({ value = 22044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22044, 'data-value': derived.doubled }, children);
}
export default Component22044;
