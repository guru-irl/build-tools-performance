import React from 'react';
const LABEL_10384 = 'component_10384';
export function Component10384({ value = 10384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10384, 'data-value': derived.doubled }, children);
}
export default Component10384;
