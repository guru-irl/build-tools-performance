import React from 'react';
const LABEL_44846 = 'component_44846';
export function Component44846({ value = 44846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44846, 'data-value': derived.doubled }, children);
}
export default Component44846;
