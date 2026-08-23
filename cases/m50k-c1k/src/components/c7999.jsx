import React from 'react';
const LABEL_7999 = 'component_7999';
export function Component7999({ value = 7999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7999, 'data-value': derived.doubled }, children);
}
export default Component7999;
