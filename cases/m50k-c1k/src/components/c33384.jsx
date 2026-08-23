import React from 'react';
const LABEL_33384 = 'component_33384';
export function Component33384({ value = 33384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33384, 'data-value': derived.doubled }, children);
}
export default Component33384;
