import React from 'react';
const LABEL_6075 = 'component_6075';
export function Component6075({ value = 6075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6075, 'data-value': derived.doubled }, children);
}
export default Component6075;
