import React from 'react';
const LABEL_39289 = 'component_39289';
export function Component39289({ value = 39289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39289, 'data-value': derived.doubled }, children);
}
export default Component39289;
