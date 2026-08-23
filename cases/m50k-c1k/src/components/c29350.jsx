import React from 'react';
const LABEL_29350 = 'component_29350';
export function Component29350({ value = 29350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29350, 'data-value': derived.doubled }, children);
}
export default Component29350;
