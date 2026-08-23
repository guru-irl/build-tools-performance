import React from 'react';
const LABEL_23635 = 'component_23635';
export function Component23635({ value = 23635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23635, 'data-value': derived.doubled }, children);
}
export default Component23635;
