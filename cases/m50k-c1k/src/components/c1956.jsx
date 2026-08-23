import React from 'react';
const LABEL_1956 = 'component_1956';
export function Component1956({ value = 1956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1956, 'data-value': derived.doubled }, children);
}
export default Component1956;
