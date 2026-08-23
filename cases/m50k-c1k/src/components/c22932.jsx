import React from 'react';
const LABEL_22932 = 'component_22932';
export function Component22932({ value = 22932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22932, 'data-value': derived.doubled }, children);
}
export default Component22932;
