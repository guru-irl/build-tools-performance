import React from 'react';
const LABEL_7236 = 'component_7236';
export function Component7236({ value = 7236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7236, 'data-value': derived.doubled }, children);
}
export default Component7236;
