import React from 'react';
const LABEL_6073 = 'component_6073';
export function Component6073({ value = 6073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6073, 'data-value': derived.doubled }, children);
}
export default Component6073;
