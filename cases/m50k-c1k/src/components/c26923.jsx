import React from 'react';
const LABEL_26923 = 'component_26923';
export function Component26923({ value = 26923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26923, 'data-value': derived.doubled }, children);
}
export default Component26923;
