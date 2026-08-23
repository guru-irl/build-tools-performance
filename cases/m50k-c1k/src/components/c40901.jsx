import React from 'react';
const LABEL_40901 = 'component_40901';
export function Component40901({ value = 40901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40901, 'data-value': derived.doubled }, children);
}
export default Component40901;
