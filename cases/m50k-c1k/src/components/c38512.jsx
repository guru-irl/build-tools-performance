import React from 'react';
const LABEL_38512 = 'component_38512';
export function Component38512({ value = 38512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38512, 'data-value': derived.doubled }, children);
}
export default Component38512;
