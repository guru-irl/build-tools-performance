import React from 'react';
const LABEL_10007 = 'component_10007';
export function Component10007({ value = 10007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10007, 'data-value': derived.doubled }, children);
}
export default Component10007;
