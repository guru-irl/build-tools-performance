import React from 'react';
const LABEL_42709 = 'component_42709';
export function Component42709({ value = 42709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42709, 'data-value': derived.doubled }, children);
}
export default Component42709;
