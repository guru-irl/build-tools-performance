import React from 'react';
const LABEL_7109 = 'component_7109';
export function Component7109({ value = 7109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7109, 'data-value': derived.doubled }, children);
}
export default Component7109;
