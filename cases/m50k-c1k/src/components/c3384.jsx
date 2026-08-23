import React from 'react';
const LABEL_3384 = 'component_3384';
export function Component3384({ value = 3384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3384, 'data-value': derived.doubled }, children);
}
export default Component3384;
