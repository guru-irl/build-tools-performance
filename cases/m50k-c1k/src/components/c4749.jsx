import React from 'react';
const LABEL_4749 = 'component_4749';
export function Component4749({ value = 4749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4749, 'data-value': derived.doubled }, children);
}
export default Component4749;
