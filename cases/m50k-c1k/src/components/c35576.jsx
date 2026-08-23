import React from 'react';
const LABEL_35576 = 'component_35576';
export function Component35576({ value = 35576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35576, 'data-value': derived.doubled }, children);
}
export default Component35576;
