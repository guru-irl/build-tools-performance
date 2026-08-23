import React from 'react';
const LABEL_587 = 'component_587';
export function Component587({ value = 587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_587, 'data-value': derived.doubled }, children);
}
export default Component587;
