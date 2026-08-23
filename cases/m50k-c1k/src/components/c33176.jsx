import React from 'react';
const LABEL_33176 = 'component_33176';
export function Component33176({ value = 33176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33176, 'data-value': derived.doubled }, children);
}
export default Component33176;
