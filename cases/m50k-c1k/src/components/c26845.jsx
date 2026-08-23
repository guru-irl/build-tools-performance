import React from 'react';
const LABEL_26845 = 'component_26845';
export function Component26845({ value = 26845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26845, 'data-value': derived.doubled }, children);
}
export default Component26845;
