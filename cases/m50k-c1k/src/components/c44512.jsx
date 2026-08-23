import React from 'react';
const LABEL_44512 = 'component_44512';
export function Component44512({ value = 44512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44512, 'data-value': derived.doubled }, children);
}
export default Component44512;
