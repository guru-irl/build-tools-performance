import React from 'react';
const LABEL_3743 = 'component_3743';
export function Component3743({ value = 3743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3743, 'data-value': derived.doubled }, children);
}
export default Component3743;
