import React from 'react';
const LABEL_6056 = 'component_6056';
export function Component6056({ value = 6056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6056, 'data-value': derived.doubled }, children);
}
export default Component6056;
