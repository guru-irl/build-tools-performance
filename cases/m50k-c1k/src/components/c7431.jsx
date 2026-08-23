import React from 'react';
const LABEL_7431 = 'component_7431';
export function Component7431({ value = 7431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7431, 'data-value': derived.doubled }, children);
}
export default Component7431;
