import React from 'react';
const LABEL_7149 = 'component_7149';
export function Component7149({ value = 7149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7149, 'data-value': derived.doubled }, children);
}
export default Component7149;
