import React from 'react';
const LABEL_384 = 'component_384';
export function Component384({ value = 384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_384, 'data-value': derived.doubled }, children);
}
export default Component384;
