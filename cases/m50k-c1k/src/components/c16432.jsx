import React from 'react';
const LABEL_16432 = 'component_16432';
export function Component16432({ value = 16432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16432, 'data-value': derived.doubled }, children);
}
export default Component16432;
