import React from 'react';
const LABEL_24432 = 'component_24432';
export function Component24432({ value = 24432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24432, 'data-value': derived.doubled }, children);
}
export default Component24432;
