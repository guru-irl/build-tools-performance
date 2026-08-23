import React from 'react';
const LABEL_20515 = 'component_20515';
export function Component20515({ value = 20515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20515, 'data-value': derived.doubled }, children);
}
export default Component20515;
