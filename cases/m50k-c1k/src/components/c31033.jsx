import React from 'react';
const LABEL_31033 = 'component_31033';
export function Component31033({ value = 31033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31033, 'data-value': derived.doubled }, children);
}
export default Component31033;
