import React from 'react';
const LABEL_37384 = 'component_37384';
export function Component37384({ value = 37384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37384, 'data-value': derived.doubled }, children);
}
export default Component37384;
