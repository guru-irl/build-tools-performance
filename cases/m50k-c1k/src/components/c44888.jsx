import React from 'react';
const LABEL_44888 = 'component_44888';
export function Component44888({ value = 44888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44888, 'data-value': derived.doubled }, children);
}
export default Component44888;
