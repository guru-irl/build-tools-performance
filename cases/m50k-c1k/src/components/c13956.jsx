import React from 'react';
const LABEL_13956 = 'component_13956';
export function Component13956({ value = 13956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13956, 'data-value': derived.doubled }, children);
}
export default Component13956;
