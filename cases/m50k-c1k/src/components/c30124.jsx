import React from 'react';
const LABEL_30124 = 'component_30124';
export function Component30124({ value = 30124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30124, 'data-value': derived.doubled }, children);
}
export default Component30124;
