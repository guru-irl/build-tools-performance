import React from 'react';
const LABEL_22749 = 'component_22749';
export function Component22749({ value = 22749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22749, 'data-value': derived.doubled }, children);
}
export default Component22749;
