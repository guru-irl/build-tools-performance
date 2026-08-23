import React from 'react';
const LABEL_10194 = 'component_10194';
export function Component10194({ value = 10194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10194, 'data-value': derived.doubled }, children);
}
export default Component10194;
