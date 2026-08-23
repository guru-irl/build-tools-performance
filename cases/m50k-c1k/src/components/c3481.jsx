import React from 'react';
const LABEL_3481 = 'component_3481';
export function Component3481({ value = 3481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3481, 'data-value': derived.doubled }, children);
}
export default Component3481;
