import React from 'react';
const LABEL_45653 = 'component_45653';
export function Component45653({ value = 45653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45653, 'data-value': derived.doubled }, children);
}
export default Component45653;
