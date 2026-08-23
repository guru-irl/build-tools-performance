import React from 'react';
const LABEL_9254 = 'component_9254';
export function Component9254({ value = 9254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9254, 'data-value': derived.doubled }, children);
}
export default Component9254;
