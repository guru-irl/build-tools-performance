import React from 'react';
const LABEL_46278 = 'component_46278';
export function Component46278({ value = 46278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46278, 'data-value': derived.doubled }, children);
}
export default Component46278;
