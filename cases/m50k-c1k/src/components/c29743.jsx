import React from 'react';
const LABEL_29743 = 'component_29743';
export function Component29743({ value = 29743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29743, 'data-value': derived.doubled }, children);
}
export default Component29743;
