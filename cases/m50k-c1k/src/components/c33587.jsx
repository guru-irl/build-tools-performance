import React from 'react';
const LABEL_33587 = 'component_33587';
export function Component33587({ value = 33587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33587, 'data-value': derived.doubled }, children);
}
export default Component33587;
