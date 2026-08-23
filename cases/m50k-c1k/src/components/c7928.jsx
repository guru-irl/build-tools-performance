import React from 'react';
const LABEL_7928 = 'component_7928';
export function Component7928({ value = 7928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7928, 'data-value': derived.doubled }, children);
}
export default Component7928;
