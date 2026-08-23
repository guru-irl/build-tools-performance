import React from 'react';
const LABEL_7361 = 'component_7361';
export function Component7361({ value = 7361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7361, 'data-value': derived.doubled }, children);
}
export default Component7361;
