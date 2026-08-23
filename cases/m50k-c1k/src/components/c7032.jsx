import React from 'react';
const LABEL_7032 = 'component_7032';
export function Component7032({ value = 7032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7032, 'data-value': derived.doubled }, children);
}
export default Component7032;
