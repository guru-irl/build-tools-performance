import React from 'react';
const LABEL_35510 = 'component_35510';
export function Component35510({ value = 35510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35510, 'data-value': derived.doubled }, children);
}
export default Component35510;
