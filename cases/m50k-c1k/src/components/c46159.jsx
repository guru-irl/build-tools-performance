import React from 'react';
const LABEL_46159 = 'component_46159';
export function Component46159({ value = 46159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46159, 'data-value': derived.doubled }, children);
}
export default Component46159;
