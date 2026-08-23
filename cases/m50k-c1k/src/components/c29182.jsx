import React from 'react';
const LABEL_29182 = 'component_29182';
export function Component29182({ value = 29182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29182, 'data-value': derived.doubled }, children);
}
export default Component29182;
