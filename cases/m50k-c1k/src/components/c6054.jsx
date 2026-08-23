import React from 'react';
const LABEL_6054 = 'component_6054';
export function Component6054({ value = 6054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6054, 'data-value': derived.doubled }, children);
}
export default Component6054;
