import React from 'react';
const LABEL_29101 = 'component_29101';
export function Component29101({ value = 29101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29101, 'data-value': derived.doubled }, children);
}
export default Component29101;
