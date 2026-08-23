import React from 'react';
const LABEL_38341 = 'component_38341';
export function Component38341({ value = 38341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38341, 'data-value': derived.doubled }, children);
}
export default Component38341;
