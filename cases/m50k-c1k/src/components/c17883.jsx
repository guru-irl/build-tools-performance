import React from 'react';
const LABEL_17883 = 'component_17883';
export function Component17883({ value = 17883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17883, 'data-value': derived.doubled }, children);
}
export default Component17883;
