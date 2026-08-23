import React from 'react';
const LABEL_21388 = 'component_21388';
export function Component21388({ value = 21388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21388, 'data-value': derived.doubled }, children);
}
export default Component21388;
