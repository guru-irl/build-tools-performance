import React from 'react';
const LABEL_44488 = 'component_44488';
export function Component44488({ value = 44488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44488, 'data-value': derived.doubled }, children);
}
export default Component44488;
