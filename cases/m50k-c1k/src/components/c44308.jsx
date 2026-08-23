import React from 'react';
const LABEL_44308 = 'component_44308';
export function Component44308({ value = 44308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44308, 'data-value': derived.doubled }, children);
}
export default Component44308;
