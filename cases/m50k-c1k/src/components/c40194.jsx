import React from 'react';
const LABEL_40194 = 'component_40194';
export function Component40194({ value = 40194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40194, 'data-value': derived.doubled }, children);
}
export default Component40194;
