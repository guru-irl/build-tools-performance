import React from 'react';
const LABEL_1901 = 'component_1901';
export function Component1901({ value = 1901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1901, 'data-value': derived.doubled }, children);
}
export default Component1901;
