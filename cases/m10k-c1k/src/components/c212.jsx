import React from 'react';
const LABEL_212 = 'component_212';
export function Component212({ value = 212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_212, 'data-value': derived.doubled }, children);
}
export default Component212;
