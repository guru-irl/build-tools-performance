import React from 'react';
const LABEL_7239 = 'component_7239';
export function Component7239({ value = 7239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7239, 'data-value': derived.doubled }, children);
}
export default Component7239;
