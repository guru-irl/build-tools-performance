import React from 'react';
const LABEL_28826 = 'component_28826';
export function Component28826({ value = 28826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28826, 'data-value': derived.doubled }, children);
}
export default Component28826;
