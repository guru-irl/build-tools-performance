import React from 'react';
const LABEL_7997 = 'component_7997';
export function Component7997({ value = 7997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7997, 'data-value': derived.doubled }, children);
}
export default Component7997;
