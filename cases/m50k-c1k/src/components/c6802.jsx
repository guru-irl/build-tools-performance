import React from 'react';
const LABEL_6802 = 'component_6802';
export function Component6802({ value = 6802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6802, 'data-value': derived.doubled }, children);
}
export default Component6802;
