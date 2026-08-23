import React from 'react';
const LABEL_44764 = 'component_44764';
export function Component44764({ value = 44764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44764, 'data-value': derived.doubled }, children);
}
export default Component44764;
