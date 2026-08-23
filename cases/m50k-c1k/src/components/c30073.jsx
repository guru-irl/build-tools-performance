import React from 'react';
const LABEL_30073 = 'component_30073';
export function Component30073({ value = 30073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30073, 'data-value': derived.doubled }, children);
}
export default Component30073;
