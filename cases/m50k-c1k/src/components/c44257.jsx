import React from 'react';
const LABEL_44257 = 'component_44257';
export function Component44257({ value = 44257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44257, 'data-value': derived.doubled }, children);
}
export default Component44257;
