import React from 'react';
const LABEL_17023 = 'component_17023';
export function Component17023({ value = 17023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17023, 'data-value': derived.doubled }, children);
}
export default Component17023;
