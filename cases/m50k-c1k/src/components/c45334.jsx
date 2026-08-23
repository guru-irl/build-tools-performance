import React from 'react';
const LABEL_45334 = 'component_45334';
export function Component45334({ value = 45334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45334, 'data-value': derived.doubled }, children);
}
export default Component45334;
