import React from 'react';
const LABEL_44002 = 'component_44002';
export function Component44002({ value = 44002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44002, 'data-value': derived.doubled }, children);
}
export default Component44002;
