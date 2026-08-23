import React from 'react';
const LABEL_16966 = 'component_16966';
export function Component16966({ value = 16966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16966, 'data-value': derived.doubled }, children);
}
export default Component16966;
