import React from 'react';
const LABEL_10956 = 'component_10956';
export function Component10956({ value = 10956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10956, 'data-value': derived.doubled }, children);
}
export default Component10956;
