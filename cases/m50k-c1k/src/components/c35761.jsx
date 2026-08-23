import React from 'react';
const LABEL_35761 = 'component_35761';
export function Component35761({ value = 35761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35761, 'data-value': derived.doubled }, children);
}
export default Component35761;
