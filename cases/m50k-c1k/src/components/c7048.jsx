import React from 'react';
const LABEL_7048 = 'component_7048';
export function Component7048({ value = 7048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7048, 'data-value': derived.doubled }, children);
}
export default Component7048;
