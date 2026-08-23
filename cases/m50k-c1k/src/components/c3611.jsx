import React from 'react';
const LABEL_3611 = 'component_3611';
export function Component3611({ value = 3611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3611, 'data-value': derived.doubled }, children);
}
export default Component3611;
