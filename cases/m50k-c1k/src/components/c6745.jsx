import React from 'react';
const LABEL_6745 = 'component_6745';
export function Component6745({ value = 6745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6745, 'data-value': derived.doubled }, children);
}
export default Component6745;
