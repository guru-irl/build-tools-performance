import React from 'react';
const LABEL_2048 = 'component_2048';
export function Component2048({ value = 2048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2048, 'data-value': derived.doubled }, children);
}
export default Component2048;
