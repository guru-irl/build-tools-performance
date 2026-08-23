import React from 'react';
const LABEL_4631 = 'component_4631';
export function Component4631({ value = 4631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4631, 'data-value': derived.doubled }, children);
}
export default Component4631;
