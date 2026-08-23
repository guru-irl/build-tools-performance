import React from 'react';
const LABEL_2460 = 'component_2460';
export function Component2460({ value = 2460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2460, 'data-value': derived.doubled }, children);
}
export default Component2460;
