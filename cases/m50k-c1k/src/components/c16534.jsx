import React from 'react';
const LABEL_16534 = 'component_16534';
export function Component16534({ value = 16534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16534, 'data-value': derived.doubled }, children);
}
export default Component16534;
