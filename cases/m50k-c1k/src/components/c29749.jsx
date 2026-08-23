import React from 'react';
const LABEL_29749 = 'component_29749';
export function Component29749({ value = 29749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29749, 'data-value': derived.doubled }, children);
}
export default Component29749;
