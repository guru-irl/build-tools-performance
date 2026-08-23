import React from 'react';
const LABEL_6739 = 'component_6739';
export function Component6739({ value = 6739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6739, 'data-value': derived.doubled }, children);
}
export default Component6739;
