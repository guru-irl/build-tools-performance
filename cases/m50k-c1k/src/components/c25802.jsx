import React from 'react';
const LABEL_25802 = 'component_25802';
export function Component25802({ value = 25802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25802, 'data-value': derived.doubled }, children);
}
export default Component25802;
