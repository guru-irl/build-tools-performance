import React from 'react';
const LABEL_40627 = 'component_40627';
export function Component40627({ value = 40627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40627, 'data-value': derived.doubled }, children);
}
export default Component40627;
