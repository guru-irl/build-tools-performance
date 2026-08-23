import React from 'react';
const LABEL_36043 = 'component_36043';
export function Component36043({ value = 36043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36043, 'data-value': derived.doubled }, children);
}
export default Component36043;
