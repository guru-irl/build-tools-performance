import React from 'react';
const LABEL_32353 = 'component_32353';
export function Component32353({ value = 32353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32353, 'data-value': derived.doubled }, children);
}
export default Component32353;
