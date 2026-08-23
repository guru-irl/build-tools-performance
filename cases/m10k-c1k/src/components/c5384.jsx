import React from 'react';
const LABEL_5384 = 'component_5384';
export function Component5384({ value = 5384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5384, 'data-value': derived.doubled }, children);
}
export default Component5384;
