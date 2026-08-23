import React from 'react';
const LABEL_33020 = 'component_33020';
export function Component33020({ value = 33020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33020, 'data-value': derived.doubled }, children);
}
export default Component33020;
