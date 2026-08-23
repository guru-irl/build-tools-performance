import React from 'react';
const LABEL_3482 = 'component_3482';
export function Component3482({ value = 3482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3482, 'data-value': derived.doubled }, children);
}
export default Component3482;
