import React from 'react';
const LABEL_35325 = 'component_35325';
export function Component35325({ value = 35325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35325, 'data-value': derived.doubled }, children);
}
export default Component35325;
