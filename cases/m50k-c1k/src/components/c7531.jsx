import React from 'react';
const LABEL_7531 = 'component_7531';
export function Component7531({ value = 7531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7531, 'data-value': derived.doubled }, children);
}
export default Component7531;
