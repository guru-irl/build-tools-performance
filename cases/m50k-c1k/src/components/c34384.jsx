import React from 'react';
const LABEL_34384 = 'component_34384';
export function Component34384({ value = 34384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34384, 'data-value': derived.doubled }, children);
}
export default Component34384;
