import React from 'react';
const LABEL_19056 = 'component_19056';
export function Component19056({ value = 19056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19056, 'data-value': derived.doubled }, children);
}
export default Component19056;
