import React from 'react';
const LABEL_16102 = 'component_16102';
export function Component16102({ value = 16102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16102, 'data-value': derived.doubled }, children);
}
export default Component16102;
