import React from 'react';
const LABEL_11171 = 'component_11171';
export function Component11171({ value = 11171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11171, 'data-value': derived.doubled }, children);
}
export default Component11171;
