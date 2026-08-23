import React from 'react';
const LABEL_26627 = 'component_26627';
export function Component26627({ value = 26627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26627, 'data-value': derived.doubled }, children);
}
export default Component26627;
