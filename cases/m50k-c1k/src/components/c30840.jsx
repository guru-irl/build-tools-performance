import React from 'react';
const LABEL_30840 = 'component_30840';
export function Component30840({ value = 30840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30840, 'data-value': derived.doubled }, children);
}
export default Component30840;
