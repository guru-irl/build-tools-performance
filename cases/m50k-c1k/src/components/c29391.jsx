import React from 'react';
const LABEL_29391 = 'component_29391';
export function Component29391({ value = 29391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29391, 'data-value': derived.doubled }, children);
}
export default Component29391;
