import React from 'react';
const LABEL_42384 = 'component_42384';
export function Component42384({ value = 42384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42384, 'data-value': derived.doubled }, children);
}
export default Component42384;
