import React from 'react';
const LABEL_10520 = 'component_10520';
export function Component10520({ value = 10520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10520, 'data-value': derived.doubled }, children);
}
export default Component10520;
