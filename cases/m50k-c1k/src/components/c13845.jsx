import React from 'react';
const LABEL_13845 = 'component_13845';
export function Component13845({ value = 13845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13845, 'data-value': derived.doubled }, children);
}
export default Component13845;
