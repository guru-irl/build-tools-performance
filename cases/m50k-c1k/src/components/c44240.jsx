import React from 'react';
const LABEL_44240 = 'component_44240';
export function Component44240({ value = 44240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44240, 'data-value': derived.doubled }, children);
}
export default Component44240;
