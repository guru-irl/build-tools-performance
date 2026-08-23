import React from 'react';
const LABEL_18243 = 'component_18243';
export function Component18243({ value = 18243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18243, 'data-value': derived.doubled }, children);
}
export default Component18243;
