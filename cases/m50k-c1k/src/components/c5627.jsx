import React from 'react';
const LABEL_5627 = 'component_5627';
export function Component5627({ value = 5627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5627, 'data-value': derived.doubled }, children);
}
export default Component5627;
