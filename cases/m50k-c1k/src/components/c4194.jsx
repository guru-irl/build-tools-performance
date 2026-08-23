import React from 'react';
const LABEL_4194 = 'component_4194';
export function Component4194({ value = 4194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4194, 'data-value': derived.doubled }, children);
}
export default Component4194;
