import React from 'react';
const LABEL_22169 = 'component_22169';
export function Component22169({ value = 22169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22169, 'data-value': derived.doubled }, children);
}
export default Component22169;
