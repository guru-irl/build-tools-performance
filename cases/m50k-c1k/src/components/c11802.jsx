import React from 'react';
const LABEL_11802 = 'component_11802';
export function Component11802({ value = 11802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11802, 'data-value': derived.doubled }, children);
}
export default Component11802;
