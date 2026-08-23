import React from 'react';
const LABEL_18923 = 'component_18923';
export function Component18923({ value = 18923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18923, 'data-value': derived.doubled }, children);
}
export default Component18923;
