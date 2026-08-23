import React from 'react';
const LABEL_26104 = 'component_26104';
export function Component26104({ value = 26104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26104, 'data-value': derived.doubled }, children);
}
export default Component26104;
