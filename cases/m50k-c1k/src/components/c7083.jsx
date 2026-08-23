import React from 'react';
const LABEL_7083 = 'component_7083';
export function Component7083({ value = 7083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7083, 'data-value': derived.doubled }, children);
}
export default Component7083;
