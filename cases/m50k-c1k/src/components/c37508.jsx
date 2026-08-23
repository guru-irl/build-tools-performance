import React from 'react';
const LABEL_37508 = 'component_37508';
export function Component37508({ value = 37508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37508, 'data-value': derived.doubled }, children);
}
export default Component37508;
