import React from 'react';
const LABEL_43749 = 'component_43749';
export function Component43749({ value = 43749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43749, 'data-value': derived.doubled }, children);
}
export default Component43749;
