import React from 'react';
const LABEL_29389 = 'component_29389';
export function Component29389({ value = 29389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29389, 'data-value': derived.doubled }, children);
}
export default Component29389;
