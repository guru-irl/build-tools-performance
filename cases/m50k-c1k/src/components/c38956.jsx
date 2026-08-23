import React from 'react';
const LABEL_38956 = 'component_38956';
export function Component38956({ value = 38956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38956, 'data-value': derived.doubled }, children);
}
export default Component38956;
