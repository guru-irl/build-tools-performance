import React from 'react';
const LABEL_45878 = 'component_45878';
export function Component45878({ value = 45878, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45878, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45878, 'data-value': derived.doubled }, children);
}
export default Component45878;
