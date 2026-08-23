import React from 'react';
const LABEL_25764 = 'component_25764';
export function Component25764({ value = 25764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25764, 'data-value': derived.doubled }, children);
}
export default Component25764;
