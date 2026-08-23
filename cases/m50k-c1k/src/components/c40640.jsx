import React from 'react';
const LABEL_40640 = 'component_40640';
export function Component40640({ value = 40640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40640, 'data-value': derived.doubled }, children);
}
export default Component40640;
