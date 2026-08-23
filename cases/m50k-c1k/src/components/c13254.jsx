import React from 'react';
const LABEL_13254 = 'component_13254';
export function Component13254({ value = 13254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13254, 'data-value': derived.doubled }, children);
}
export default Component13254;
