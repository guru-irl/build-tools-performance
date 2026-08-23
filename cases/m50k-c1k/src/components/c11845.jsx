import React from 'react';
const LABEL_11845 = 'component_11845';
export function Component11845({ value = 11845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11845, 'data-value': derived.doubled }, children);
}
export default Component11845;
