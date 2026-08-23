import React from 'react';
const LABEL_36627 = 'component_36627';
export function Component36627({ value = 36627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36627, 'data-value': derived.doubled }, children);
}
export default Component36627;
