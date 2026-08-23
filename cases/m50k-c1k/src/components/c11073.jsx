import React from 'react';
const LABEL_11073 = 'component_11073';
export function Component11073({ value = 11073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11073, 'data-value': derived.doubled }, children);
}
export default Component11073;
