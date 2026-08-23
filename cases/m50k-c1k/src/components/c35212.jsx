import React from 'react';
const LABEL_35212 = 'component_35212';
export function Component35212({ value = 35212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35212, 'data-value': derived.doubled }, children);
}
export default Component35212;
