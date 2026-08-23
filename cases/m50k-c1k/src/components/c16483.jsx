import React from 'react';
const LABEL_16483 = 'component_16483';
export function Component16483({ value = 16483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16483, 'data-value': derived.doubled }, children);
}
export default Component16483;
