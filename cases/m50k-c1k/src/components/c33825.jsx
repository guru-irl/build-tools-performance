import React from 'react';
const LABEL_33825 = 'component_33825';
export function Component33825({ value = 33825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33825, 'data-value': derived.doubled }, children);
}
export default Component33825;
