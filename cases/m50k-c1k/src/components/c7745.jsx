import React from 'react';
const LABEL_7745 = 'component_7745';
export function Component7745({ value = 7745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7745, 'data-value': derived.doubled }, children);
}
export default Component7745;
