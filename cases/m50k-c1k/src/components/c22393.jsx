import React from 'react';
const LABEL_22393 = 'component_22393';
export function Component22393({ value = 22393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22393, 'data-value': derived.doubled }, children);
}
export default Component22393;
