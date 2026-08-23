import React from 'react';
const LABEL_35708 = 'component_35708';
export function Component35708({ value = 35708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35708, 'data-value': derived.doubled }, children);
}
export default Component35708;
