import React from 'react';
const LABEL_35289 = 'component_35289';
export function Component35289({ value = 35289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35289, 'data-value': derived.doubled }, children);
}
export default Component35289;
