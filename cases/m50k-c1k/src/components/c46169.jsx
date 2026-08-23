import React from 'react';
const LABEL_46169 = 'component_46169';
export function Component46169({ value = 46169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46169, 'data-value': derived.doubled }, children);
}
export default Component46169;
