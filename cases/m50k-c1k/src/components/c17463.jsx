import React from 'react';
const LABEL_17463 = 'component_17463';
export function Component17463({ value = 17463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17463, 'data-value': derived.doubled }, children);
}
export default Component17463;
