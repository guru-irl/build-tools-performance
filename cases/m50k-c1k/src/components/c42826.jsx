import React from 'react';
const LABEL_42826 = 'component_42826';
export function Component42826({ value = 42826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42826, 'data-value': derived.doubled }, children);
}
export default Component42826;
