import React from 'react';
const LABEL_901 = 'component_901';
export function Component901({ value = 901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_901, 'data-value': derived.doubled }, children);
}
export default Component901;
