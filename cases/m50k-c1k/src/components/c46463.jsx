import React from 'react';
const LABEL_46463 = 'component_46463';
export function Component46463({ value = 46463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46463, 'data-value': derived.doubled }, children);
}
export default Component46463;
