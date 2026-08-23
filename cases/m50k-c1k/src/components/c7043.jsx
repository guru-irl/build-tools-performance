import React from 'react';
const LABEL_7043 = 'component_7043';
export function Component7043({ value = 7043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7043, 'data-value': derived.doubled }, children);
}
export default Component7043;
