import React from 'react';
const LABEL_16669 = 'component_16669';
export function Component16669({ value = 16669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16669, 'data-value': derived.doubled }, children);
}
export default Component16669;
