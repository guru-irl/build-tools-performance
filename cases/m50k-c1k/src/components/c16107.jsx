import React from 'react';
const LABEL_16107 = 'component_16107';
export function Component16107({ value = 16107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16107, 'data-value': derived.doubled }, children);
}
export default Component16107;
