import React from 'react';
const LABEL_27172 = 'component_27172';
export function Component27172({ value = 27172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27172, 'data-value': derived.doubled }, children);
}
export default Component27172;
