import React from 'react';
const LABEL_30289 = 'component_30289';
export function Component30289({ value = 30289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30289, 'data-value': derived.doubled }, children);
}
export default Component30289;
