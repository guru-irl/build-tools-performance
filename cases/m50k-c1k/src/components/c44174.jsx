import React from 'react';
const LABEL_44174 = 'component_44174';
export function Component44174({ value = 44174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44174, 'data-value': derived.doubled }, children);
}
export default Component44174;
