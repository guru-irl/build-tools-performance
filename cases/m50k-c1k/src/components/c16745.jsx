import React from 'react';
const LABEL_16745 = 'component_16745';
export function Component16745({ value = 16745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16745, 'data-value': derived.doubled }, children);
}
export default Component16745;
