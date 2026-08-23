import React from 'react';
const LABEL_100 = 'component_100';
export function Component100({ value = 100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_100, 'data-value': derived.doubled }, children);
}
export default Component100;
