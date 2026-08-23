import React from 'react';
const LABEL_40124 = 'component_40124';
export function Component40124({ value = 40124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40124, 'data-value': derived.doubled }, children);
}
export default Component40124;
