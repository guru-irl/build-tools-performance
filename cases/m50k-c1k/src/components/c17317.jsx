import React from 'react';
const LABEL_17317 = 'component_17317';
export function Component17317({ value = 17317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17317, 'data-value': derived.doubled }, children);
}
export default Component17317;
