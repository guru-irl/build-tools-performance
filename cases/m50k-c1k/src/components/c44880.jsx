import React from 'react';
const LABEL_44880 = 'component_44880';
export function Component44880({ value = 44880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44880, 'data-value': derived.doubled }, children);
}
export default Component44880;
