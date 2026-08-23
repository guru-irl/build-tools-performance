import React from 'react';
const LABEL_6043 = 'component_6043';
export function Component6043({ value = 6043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6043, 'data-value': derived.doubled }, children);
}
export default Component6043;
