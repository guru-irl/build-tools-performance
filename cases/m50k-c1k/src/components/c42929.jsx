import React from 'react';
const LABEL_42929 = 'component_42929';
export function Component42929({ value = 42929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42929, 'data-value': derived.doubled }, children);
}
export default Component42929;
