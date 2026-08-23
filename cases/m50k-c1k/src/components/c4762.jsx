import React from 'react';
const LABEL_4762 = 'component_4762';
export function Component4762({ value = 4762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4762, 'data-value': derived.doubled }, children);
}
export default Component4762;
