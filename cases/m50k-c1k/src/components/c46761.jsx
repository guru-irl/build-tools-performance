import React from 'react';
const LABEL_46761 = 'component_46761';
export function Component46761({ value = 46761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46761, 'data-value': derived.doubled }, children);
}
export default Component46761;
