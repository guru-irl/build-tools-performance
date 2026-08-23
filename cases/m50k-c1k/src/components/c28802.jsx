import React from 'react';
const LABEL_28802 = 'component_28802';
export function Component28802({ value = 28802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28802, 'data-value': derived.doubled }, children);
}
export default Component28802;
