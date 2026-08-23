import React from 'react';
const LABEL_44845 = 'component_44845';
export function Component44845({ value = 44845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44845, 'data-value': derived.doubled }, children);
}
export default Component44845;
