import React from 'react';
const LABEL_2331 = 'component_2331';
export function Component2331({ value = 2331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2331, 'data-value': derived.doubled }, children);
}
export default Component2331;
