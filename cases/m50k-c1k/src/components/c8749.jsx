import React from 'react';
const LABEL_8749 = 'component_8749';
export function Component8749({ value = 8749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8749, 'data-value': derived.doubled }, children);
}
export default Component8749;
