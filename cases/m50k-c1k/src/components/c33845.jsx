import React from 'react';
const LABEL_33845 = 'component_33845';
export function Component33845({ value = 33845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33845, 'data-value': derived.doubled }, children);
}
export default Component33845;
