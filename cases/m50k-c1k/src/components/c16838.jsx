import React from 'react';
const LABEL_16838 = 'component_16838';
export function Component16838({ value = 16838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16838, 'data-value': derived.doubled }, children);
}
export default Component16838;
