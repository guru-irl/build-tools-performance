import React from 'react';
const LABEL_37169 = 'component_37169';
export function Component37169({ value = 37169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37169, 'data-value': derived.doubled }, children);
}
export default Component37169;
