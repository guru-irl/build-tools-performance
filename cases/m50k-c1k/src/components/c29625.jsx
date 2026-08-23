import React from 'react';
const LABEL_29625 = 'component_29625';
export function Component29625({ value = 29625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29625, 'data-value': derived.doubled }, children);
}
export default Component29625;
