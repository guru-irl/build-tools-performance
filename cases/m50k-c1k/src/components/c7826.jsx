import React from 'react';
const LABEL_7826 = 'component_7826';
export function Component7826({ value = 7826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7826, 'data-value': derived.doubled }, children);
}
export default Component7826;
