import React from 'react';
const LABEL_1180 = 'component_1180';
export function Component1180({ value = 1180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1180, 'data-value': derived.doubled }, children);
}
export default Component1180;
