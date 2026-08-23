import React from 'react';
const LABEL_6169 = 'component_6169';
export function Component6169({ value = 6169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6169, 'data-value': derived.doubled }, children);
}
export default Component6169;
