import React from 'react';
const LABEL_15576 = 'component_15576';
export function Component15576({ value = 15576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15576, 'data-value': derived.doubled }, children);
}
export default Component15576;
