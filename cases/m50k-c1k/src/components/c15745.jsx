import React from 'react';
const LABEL_15745 = 'component_15745';
export function Component15745({ value = 15745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15745, 'data-value': derived.doubled }, children);
}
export default Component15745;
