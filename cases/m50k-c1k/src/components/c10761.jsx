import React from 'react';
const LABEL_10761 = 'component_10761';
export function Component10761({ value = 10761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10761, 'data-value': derived.doubled }, children);
}
export default Component10761;
