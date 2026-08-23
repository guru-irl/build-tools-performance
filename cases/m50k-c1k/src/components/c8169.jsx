import React from 'react';
const LABEL_8169 = 'component_8169';
export function Component8169({ value = 8169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8169, 'data-value': derived.doubled }, children);
}
export default Component8169;
