import React from 'react';
const LABEL_44737 = 'component_44737';
export function Component44737({ value = 44737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44737, 'data-value': derived.doubled }, children);
}
export default Component44737;
