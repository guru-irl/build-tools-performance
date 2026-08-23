import React from 'react';
const LABEL_13831 = 'component_13831';
export function Component13831({ value = 13831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13831, 'data-value': derived.doubled }, children);
}
export default Component13831;
