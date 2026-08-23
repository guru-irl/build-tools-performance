import React from 'react';
const LABEL_7179 = 'component_7179';
export function Component7179({ value = 7179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7179, 'data-value': derived.doubled }, children);
}
export default Component7179;
