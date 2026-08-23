import React from 'react';
const LABEL_10431 = 'component_10431';
export function Component10431({ value = 10431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10431, 'data-value': derived.doubled }, children);
}
export default Component10431;
