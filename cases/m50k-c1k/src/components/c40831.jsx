import React from 'react';
const LABEL_40831 = 'component_40831';
export function Component40831({ value = 40831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40831, 'data-value': derived.doubled }, children);
}
export default Component40831;
