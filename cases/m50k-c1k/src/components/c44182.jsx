import React from 'react';
const LABEL_44182 = 'component_44182';
export function Component44182({ value = 44182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44182, 'data-value': derived.doubled }, children);
}
export default Component44182;
