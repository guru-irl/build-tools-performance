import React from 'react';
const LABEL_37250 = 'component_37250';
export function Component37250({ value = 37250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37250, 'data-value': derived.doubled }, children);
}
export default Component37250;
