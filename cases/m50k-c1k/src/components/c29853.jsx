import React from 'react';
const LABEL_29853 = 'component_29853';
export function Component29853({ value = 29853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29853, 'data-value': derived.doubled }, children);
}
export default Component29853;
