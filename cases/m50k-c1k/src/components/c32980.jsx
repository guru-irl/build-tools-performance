import React from 'react';
const LABEL_32980 = 'component_32980';
export function Component32980({ value = 32980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32980, 'data-value': derived.doubled }, children);
}
export default Component32980;
