import React from 'react';
const LABEL_432 = 'component_432';
export function Component432({ value = 432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_432, 'data-value': derived.doubled }, children);
}
export default Component432;
