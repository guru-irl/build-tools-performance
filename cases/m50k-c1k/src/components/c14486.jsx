import React from 'react';
const LABEL_14486 = 'component_14486';
export function Component14486({ value = 14486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14486, 'data-value': derived.doubled }, children);
}
export default Component14486;
