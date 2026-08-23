import React from 'react';
const LABEL_14547 = 'component_14547';
export function Component14547({ value = 14547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14547, 'data-value': derived.doubled }, children);
}
export default Component14547;
