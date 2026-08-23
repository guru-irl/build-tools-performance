import React from 'react';
const LABEL_23281 = 'component_23281';
export function Component23281({ value = 23281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23281, 'data-value': derived.doubled }, children);
}
export default Component23281;
