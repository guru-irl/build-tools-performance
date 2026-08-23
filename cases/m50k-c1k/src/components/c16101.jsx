import React from 'react';
const LABEL_16101 = 'component_16101';
export function Component16101({ value = 16101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16101, 'data-value': derived.doubled }, children);
}
export default Component16101;
