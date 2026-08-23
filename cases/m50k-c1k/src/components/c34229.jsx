import React from 'react';
const LABEL_34229 = 'component_34229';
export function Component34229({ value = 34229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34229, 'data-value': derived.doubled }, children);
}
export default Component34229;
