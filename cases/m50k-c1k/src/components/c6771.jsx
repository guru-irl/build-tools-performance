import React from 'react';
const LABEL_6771 = 'component_6771';
export function Component6771({ value = 6771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6771, 'data-value': derived.doubled }, children);
}
export default Component6771;
