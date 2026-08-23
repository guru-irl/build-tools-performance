import React from 'react';
const LABEL_19826 = 'component_19826';
export function Component19826({ value = 19826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19826, 'data-value': derived.doubled }, children);
}
export default Component19826;
