import React from 'react';
const LABEL_7194 = 'component_7194';
export function Component7194({ value = 7194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7194, 'data-value': derived.doubled }, children);
}
export default Component7194;
