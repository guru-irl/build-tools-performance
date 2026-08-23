import React from 'react';
const LABEL_2966 = 'component_2966';
export function Component2966({ value = 2966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2966, 'data-value': derived.doubled }, children);
}
export default Component2966;
