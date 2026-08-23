import React from 'react';
const LABEL_39073 = 'component_39073';
export function Component39073({ value = 39073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39073, 'data-value': derived.doubled }, children);
}
export default Component39073;
