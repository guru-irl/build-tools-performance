import React from 'react';
const LABEL_21006 = 'component_21006';
export function Component21006({ value = 21006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21006, 'data-value': derived.doubled }, children);
}
export default Component21006;
