import React from 'react';
const LABEL_26169 = 'component_26169';
export function Component26169({ value = 26169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26169, 'data-value': derived.doubled }, children);
}
export default Component26169;
