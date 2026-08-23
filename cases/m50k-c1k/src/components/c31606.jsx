import React from 'react';
const LABEL_31606 = 'component_31606';
export function Component31606({ value = 31606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31606, 'data-value': derived.doubled }, children);
}
export default Component31606;
