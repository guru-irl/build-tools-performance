import React from 'react';
const LABEL_22547 = 'component_22547';
export function Component22547({ value = 22547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22547, 'data-value': derived.doubled }, children);
}
export default Component22547;
