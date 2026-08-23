import React from 'react';
const LABEL_46631 = 'component_46631';
export function Component46631({ value = 46631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46631, 'data-value': derived.doubled }, children);
}
export default Component46631;
