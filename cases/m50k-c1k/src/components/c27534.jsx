import React from 'react';
const LABEL_27534 = 'component_27534';
export function Component27534({ value = 27534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27534, 'data-value': derived.doubled }, children);
}
export default Component27534;
