import React from 'react';
const LABEL_33929 = 'component_33929';
export function Component33929({ value = 33929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33929, 'data-value': derived.doubled }, children);
}
export default Component33929;
