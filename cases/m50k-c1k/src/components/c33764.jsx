import React from 'react';
const LABEL_33764 = 'component_33764';
export function Component33764({ value = 33764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33764, 'data-value': derived.doubled }, children);
}
export default Component33764;
