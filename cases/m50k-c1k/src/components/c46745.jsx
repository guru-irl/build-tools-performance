import React from 'react';
const LABEL_46745 = 'component_46745';
export function Component46745({ value = 46745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46745, 'data-value': derived.doubled }, children);
}
export default Component46745;
