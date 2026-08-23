import React from 'react';
const LABEL_2547 = 'component_2547';
export function Component2547({ value = 2547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2547, 'data-value': derived.doubled }, children);
}
export default Component2547;
