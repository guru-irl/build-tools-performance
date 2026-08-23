import React from 'react';
const LABEL_22430 = 'component_22430';
export function Component22430({ value = 22430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22430, 'data-value': derived.doubled }, children);
}
export default Component22430;
