import React from 'react';
const LABEL_4384 = 'component_4384';
export function Component4384({ value = 4384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4384, 'data-value': derived.doubled }, children);
}
export default Component4384;
