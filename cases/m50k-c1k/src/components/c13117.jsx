import React from 'react';
const LABEL_13117 = 'component_13117';
export function Component13117({ value = 13117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13117, 'data-value': derived.doubled }, children);
}
export default Component13117;
