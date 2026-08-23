import React from 'react';
const LABEL_11384 = 'component_11384';
export function Component11384({ value = 11384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11384, 'data-value': derived.doubled }, children);
}
export default Component11384;
