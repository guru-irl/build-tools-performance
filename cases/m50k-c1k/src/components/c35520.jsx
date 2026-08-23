import React from 'react';
const LABEL_35520 = 'component_35520';
export function Component35520({ value = 35520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35520, 'data-value': derived.doubled }, children);
}
export default Component35520;
