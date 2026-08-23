import React from 'react';
const LABEL_40384 = 'component_40384';
export function Component40384({ value = 40384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40384, 'data-value': derived.doubled }, children);
}
export default Component40384;
