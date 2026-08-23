import React from 'react';
const LABEL_7833 = 'component_7833';
export function Component7833({ value = 7833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7833, 'data-value': derived.doubled }, children);
}
export default Component7833;
