import React from 'react';
const LABEL_34826 = 'component_34826';
export function Component34826({ value = 34826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34826, 'data-value': derived.doubled }, children);
}
export default Component34826;
