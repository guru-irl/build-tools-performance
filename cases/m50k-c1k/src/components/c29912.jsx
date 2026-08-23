import React from 'react';
const LABEL_29912 = 'component_29912';
export function Component29912({ value = 29912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29912, 'data-value': derived.doubled }, children);
}
export default Component29912;
