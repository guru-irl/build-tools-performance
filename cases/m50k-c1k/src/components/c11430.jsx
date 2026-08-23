import React from 'react';
const LABEL_11430 = 'component_11430';
export function Component11430({ value = 11430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11430, 'data-value': derived.doubled }, children);
}
export default Component11430;
