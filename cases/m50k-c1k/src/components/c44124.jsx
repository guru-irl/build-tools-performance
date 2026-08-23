import React from 'react';
const LABEL_44124 = 'component_44124';
export function Component44124({ value = 44124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44124, 'data-value': derived.doubled }, children);
}
export default Component44124;
