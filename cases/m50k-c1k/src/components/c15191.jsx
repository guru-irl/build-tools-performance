import React from 'react';
const LABEL_15191 = 'component_15191';
export function Component15191({ value = 15191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15191, 'data-value': derived.doubled }, children);
}
export default Component15191;
