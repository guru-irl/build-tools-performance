import React from 'react';
const LABEL_16111 = 'component_16111';
export function Component16111({ value = 16111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16111, 'data-value': derived.doubled }, children);
}
export default Component16111;
