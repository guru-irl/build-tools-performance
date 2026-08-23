import React from 'react';
const LABEL_28929 = 'component_28929';
export function Component28929({ value = 28929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28929, 'data-value': derived.doubled }, children);
}
export default Component28929;
