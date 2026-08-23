import React from 'react';
const LABEL_5956 = 'component_5956';
export function Component5956({ value = 5956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5956, 'data-value': derived.doubled }, children);
}
export default Component5956;
