import React from 'react';
const LABEL_12956 = 'component_12956';
export function Component12956({ value = 12956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12956, 'data-value': derived.doubled }, children);
}
export default Component12956;
