import React from 'react';
const LABEL_29068 = 'component_29068';
export function Component29068({ value = 29068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29068, 'data-value': derived.doubled }, children);
}
export default Component29068;
