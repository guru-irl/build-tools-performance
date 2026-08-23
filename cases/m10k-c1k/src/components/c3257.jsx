import React from 'react';
const LABEL_3257 = 'component_3257';
export function Component3257({ value = 3257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3257, 'data-value': derived.doubled }, children);
}
export default Component3257;
