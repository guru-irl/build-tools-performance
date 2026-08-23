import React from 'react';
const LABEL_5111 = 'component_5111';
export function Component5111({ value = 5111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5111, 'data-value': derived.doubled }, children);
}
export default Component5111;
