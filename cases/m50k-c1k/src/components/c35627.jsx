import React from 'react';
const LABEL_35627 = 'component_35627';
export function Component35627({ value = 35627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35627, 'data-value': derived.doubled }, children);
}
export default Component35627;
