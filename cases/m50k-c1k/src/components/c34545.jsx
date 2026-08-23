import React from 'react';
const LABEL_34545 = 'component_34545';
export function Component34545({ value = 34545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34545, 'data-value': derived.doubled }, children);
}
export default Component34545;
