import React from 'react';
const LABEL_12627 = 'component_12627';
export function Component12627({ value = 12627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12627, 'data-value': derived.doubled }, children);
}
export default Component12627;
