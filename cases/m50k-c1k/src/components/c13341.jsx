import React from 'react';
const LABEL_13341 = 'component_13341';
export function Component13341({ value = 13341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13341, 'data-value': derived.doubled }, children);
}
export default Component13341;
