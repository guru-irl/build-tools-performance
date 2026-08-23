import React from 'react';
const LABEL_23956 = 'component_23956';
export function Component23956({ value = 23956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23956, 'data-value': derived.doubled }, children);
}
export default Component23956;
