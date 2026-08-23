import React from 'react';
const LABEL_45976 = 'component_45976';
export function Component45976({ value = 45976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45976, 'data-value': derived.doubled }, children);
}
export default Component45976;
