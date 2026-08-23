import React from 'react';
const LABEL_46676 = 'component_46676';
export function Component46676({ value = 46676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46676, 'data-value': derived.doubled }, children);
}
export default Component46676;
