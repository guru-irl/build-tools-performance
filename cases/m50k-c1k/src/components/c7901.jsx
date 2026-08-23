import React from 'react';
const LABEL_7901 = 'component_7901';
export function Component7901({ value = 7901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7901, 'data-value': derived.doubled }, children);
}
export default Component7901;
