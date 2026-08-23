import React from 'react';
const LABEL_21812 = 'component_21812';
export function Component21812({ value = 21812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21812, 'data-value': derived.doubled }, children);
}
export default Component21812;
