import React from 'react';
const LABEL_18432 = 'component_18432';
export function Component18432({ value = 18432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18432, 'data-value': derived.doubled }, children);
}
export default Component18432;
