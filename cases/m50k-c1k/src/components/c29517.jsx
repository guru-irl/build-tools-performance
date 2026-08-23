import React from 'react';
const LABEL_29517 = 'component_29517';
export function Component29517({ value = 29517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29517, 'data-value': derived.doubled }, children);
}
export default Component29517;
