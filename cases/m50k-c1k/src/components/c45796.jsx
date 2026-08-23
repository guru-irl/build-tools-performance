import React from 'react';
const LABEL_45796 = 'component_45796';
export function Component45796({ value = 45796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45796, 'data-value': derived.doubled }, children);
}
export default Component45796;
