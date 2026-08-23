import React from 'react';
const LABEL_5745 = 'component_5745';
export function Component5745({ value = 5745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5745, 'data-value': derived.doubled }, children);
}
export default Component5745;
