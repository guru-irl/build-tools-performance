import React from 'react';
const LABEL_18043 = 'component_18043';
export function Component18043({ value = 18043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18043, 'data-value': derived.doubled }, children);
}
export default Component18043;
