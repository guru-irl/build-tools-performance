import React from 'react';
const LABEL_15238 = 'component_15238';
export function Component15238({ value = 15238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15238, 'data-value': derived.doubled }, children);
}
export default Component15238;
