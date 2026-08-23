import React from 'react';
const LABEL_40160 = 'component_40160';
export function Component40160({ value = 40160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40160, 'data-value': derived.doubled }, children);
}
export default Component40160;
