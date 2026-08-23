import React from 'react';
const LABEL_23363 = 'component_23363';
export function Component23363({ value = 23363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23363, 'data-value': derived.doubled }, children);
}
export default Component23363;
