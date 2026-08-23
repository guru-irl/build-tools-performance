import React from 'react';
const LABEL_31198 = 'component_31198';
export function Component31198({ value = 31198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31198, 'data-value': derived.doubled }, children);
}
export default Component31198;
