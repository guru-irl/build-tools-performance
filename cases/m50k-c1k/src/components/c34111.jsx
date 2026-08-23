import React from 'react';
const LABEL_34111 = 'component_34111';
export function Component34111({ value = 34111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34111, 'data-value': derived.doubled }, children);
}
export default Component34111;
