import React from 'react';
const LABEL_46826 = 'component_46826';
export function Component46826({ value = 46826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46826, 'data-value': derived.doubled }, children);
}
export default Component46826;
