import React from 'react';
const LABEL_33432 = 'component_33432';
export function Component33432({ value = 33432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33432, 'data-value': derived.doubled }, children);
}
export default Component33432;
