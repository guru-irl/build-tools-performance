import React from 'react';
const LABEL_30337 = 'component_30337';
export function Component30337({ value = 30337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30337, 'data-value': derived.doubled }, children);
}
export default Component30337;
