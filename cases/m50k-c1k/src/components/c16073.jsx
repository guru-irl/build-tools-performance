import React from 'react';
const LABEL_16073 = 'component_16073';
export function Component16073({ value = 16073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16073, 'data-value': derived.doubled }, children);
}
export default Component16073;
