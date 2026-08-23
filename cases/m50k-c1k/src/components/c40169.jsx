import React from 'react';
const LABEL_40169 = 'component_40169';
export function Component40169({ value = 40169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40169, 'data-value': derived.doubled }, children);
}
export default Component40169;
