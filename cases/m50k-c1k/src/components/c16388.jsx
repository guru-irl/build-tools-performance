import React from 'react';
const LABEL_16388 = 'component_16388';
export function Component16388({ value = 16388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16388, 'data-value': derived.doubled }, children);
}
export default Component16388;
