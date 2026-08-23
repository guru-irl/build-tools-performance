import React from 'react';
const LABEL_45655 = 'component_45655';
export function Component45655({ value = 45655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45655, 'data-value': derived.doubled }, children);
}
export default Component45655;
