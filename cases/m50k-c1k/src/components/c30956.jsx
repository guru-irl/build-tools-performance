import React from 'react';
const LABEL_30956 = 'component_30956';
export function Component30956({ value = 30956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30956, 'data-value': derived.doubled }, children);
}
export default Component30956;
