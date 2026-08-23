import React from 'react';
const LABEL_29043 = 'component_29043';
export function Component29043({ value = 29043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29043, 'data-value': derived.doubled }, children);
}
export default Component29043;
