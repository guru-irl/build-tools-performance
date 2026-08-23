import React from 'react';
const LABEL_22071 = 'component_22071';
export function Component22071({ value = 22071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22071, 'data-value': derived.doubled }, children);
}
export default Component22071;
