import React from 'react';
const LABEL_44400 = 'component_44400';
export function Component44400({ value = 44400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44400, 'data-value': derived.doubled }, children);
}
export default Component44400;
